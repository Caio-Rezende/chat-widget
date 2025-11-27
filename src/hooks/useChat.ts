import { useState, useCallback, useRef, useEffect } from "react";
import { Message, MessageRole } from "../types";
import {
    saveMessageHistory,
    getMessageHistory,
    clearMessageHistory,
} from "../utils/messageHistory";

export interface UseChatProps {
    apiKey: string;
    userId: string;
    welcomeMessage?: string;
    onMessageSent?: (message: string) => void;
    onMessageReceived?: (message: string) => void;
    onError?: (error: string) => void;
}

export interface UseChatReturn {
    error: string | null;
    isLoading: boolean;
    messages: Message[];
    sendMessage: (content: string) => Promise<void>;
    clearMessages: () => void;
    clearError: () => void;
}

export const useChat = ({
    apiKey,
    userId,
    welcomeMessage,
    onMessageSent,
    onMessageReceived,
    onError,
}: UseChatProps): UseChatReturn => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    // Load message history when component mounts or userId changes
    useEffect(() => {
        if (userId) {
            const history = getMessageHistory(userId);

            if (history?.length > 0) {
                setMessages(
                    history.map((msg: any) => ({
                        ...msg,
                        timestamp: new Date(msg.timestamp), // Convert string back to Date
                    }))
                );
                return;
            }

            // Add welcome message first if it exists
            if (welcomeMessage) {
                setMessages([
                    {
                        id: `welcome-${Date.now()}`,
                        content: welcomeMessage,
                        role: "assistant",
                        timestamp: new Date(),
                    },
                ]);
            }
        }
    }, [userId, welcomeMessage]);

    // Save message history whenever messages change (excluding welcome messages)
    useEffect(() => {
        if (userId && messages.length > 0) {
            // Only save if we have non-welcome messages
            const nonWelcomeMessages = messages.filter(
                (msg) => !msg.id.startsWith("welcome-")
            );
            if (nonWelcomeMessages.length > 0) {
                saveMessageHistory(userId, messages);
            }
        }
    }, [userId, messages]);

    // Generate unique message ID
    const generateMessageId = useCallback(() => {
        return `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }, []);

    // Clear error state
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    // Clear all messages and history
    const clearMessages = useCallback(() => {
        if (userId) {
            clearMessageHistory(userId);
        }

        const newMessages: Message[] = [];

        if (welcomeMessage) {
            const welcomeMsg: Message = {
                id: `welcome-${Date.now()}`,
                content: welcomeMessage,
                role: "assistant",
                timestamp: new Date(),
            };
            newMessages.push(welcomeMsg);
        }

        setMessages(newMessages);
    }, [userId, welcomeMessage]);

    // Add message to state
    const addMessage = useCallback(
        (content: string, role: MessageRole) => {
            const newMessage: Message = {
                id: generateMessageId(),
                content,
                role,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, newMessage]);
            return newMessage;
        },
        [generateMessageId]
    );

    // Call OpenAI API
    const callOpenAI = async (
        userMessage: string,
        signal: AbortSignal
    ): Promise<string> => {
        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content:
                                "You are a helpful assistant. Provide concise and helpful responses.",
                        },
                        {
                            role: "user",
                            content: userMessage,
                        },
                    ],
                    max_tokens: 500,
                    temperature: 0.7,
                }),
                signal,
            }
        );

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error(
                    "Invalid API key. Please check your OpenAI API key."
                );
            } else if (response.status === 429) {
                throw new Error("Rate limit exceeded. Please try again later.");
            } else if (response.status >= 500) {
                throw new Error(
                    "OpenAI service is currently unavailable. Please try again later."
                );
            } else {
                throw new Error(
                    `API request failed with status ${response.status}`
                );
            }
        }

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error("Invalid response format from OpenAI API");
        }

        return data.choices[0].message.content.trim();
    };

    // Send message function
    const sendMessage = useCallback(
        async (content: string) => {
            if (!content.trim() || isLoading) return;

            // Clear any existing error
            setError(null);

            // Add user message
            addMessage(content, "user");
            onMessageSent?.(content);

            // Set loading state
            setIsLoading(true);

            // Cancel any existing request
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }

            // Create new abort controller
            abortControllerRef.current = new AbortController();

            try {
                // Call OpenAI API
                const assistantResponse = await callOpenAI(
                    content,
                    abortControllerRef.current.signal
                );

                // Add assistant message
                addMessage(assistantResponse, "assistant");
                onMessageReceived?.(assistantResponse);
            } catch (err) {
                // Handle different types of errors
                let errorMessage = "An unexpected error occurred";

                if (err instanceof Error) {
                    if (err.name === "AbortError") {
                        // Request was cancelled, don't show error
                        return;
                    }
                    errorMessage = err.message;
                }

                setError(errorMessage);
                onError?.(errorMessage);

                // Add error message to chat
                addMessage(
                    "Sorry, I encountered an error. Please try again.",
                    "assistant"
                );
            } finally {
                setIsLoading(false);
                abortControllerRef.current = null;
            }
        },
        [
            isLoading,
            addMessage,
            onMessageSent,
            onMessageReceived,
            onError,
            apiKey,
        ]
    );

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    return {
        error,
        isLoading,
        messages,
        sendMessage,
        clearMessages,
        clearError,
    };
};
