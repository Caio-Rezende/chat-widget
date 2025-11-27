// Core Message Types
export type MessageRole = "user" | "assistant" | "system";

export interface Message {
    content: string;
    id: string;
    isError?: boolean;
    role: MessageRole;
    timestamp: Date;
}

// Chat Widget Props
export interface ChatWidgetProps {
    allowMarkdown?: boolean;
    apiKey: string;
    buttonIcon?: string;
    className?: string;
    closeIcon?: string;
    disabled?: boolean;
    height?: number;
    isOnline?: boolean;
    maxHeight?: number;
    placeholder?: string;
    position?: WidgetPosition;
    primaryColor?: string;
    sendIcon?: string;
    showTimestamp?: boolean;
    style?: React.CSSProperties;
    theme?: ThemeMode | "auto";
    title?: string;
    userId?: string;
    welcomeMessage?: string;
    width?: number;
    onMessageSent?: (message: string) => void;
    onMessageReceived?: (message: string) => void;
    onError?: (error: string) => void;
    onToggle?: (isOpen: boolean) => void;
}

// Chat Window Props
export interface ChatWindowProps {
    allowMarkdown: boolean;
    className?: string;
    error: string | null;
    height: number;
    isLoading: boolean;
    isOpen: boolean;
    maxHeight: number;
    messages: Message[];
    placeholder: string;
    primaryColor: string;
    showTimestamp: boolean;
    style?: React.CSSProperties;
    theme: ThemeMode;
    title: string;
    width: number;
    onClearError: () => void;
    onClose: () => void;
    onSendMessage: (message: string) => void;
}

// Chat Header Props
export interface ChatHeaderProps {
    className?: string;
    primaryColor: string;
    theme: ThemeMode;
    title: string;
    onClose: () => void;
    onMinimize?: () => void;
}

// Message List Props
export interface MessageListProps {
    allowMarkdown: boolean;
    className?: string;
    isLoading: boolean;
    messages: Message[];
    showTimestamp: boolean;
    theme: ThemeMode;
}

// Message Bubble Props
export interface MessageBubbleProps {
    allowMarkdown: boolean;
    className?: string;
    message: Message;
    showTimestamp: boolean;
    theme: ThemeMode;
}

// Message Input Props
export interface MessageInputProps {
    className?: string;
    disabled: boolean;
    placeholder: string;
    primaryColor: string;
    theme: ThemeMode;
    onSendMessage: (message: string) => void;
}

// Loading Indicator Props
export interface LoadingIndicatorProps {
    className?: string;
    size?: LoadingSize;
    theme: ThemeMode;
}

// Hook Types
export interface UseChatProps {
    apiKey: string;
    welcomeMessage?: string;
    onError?: (error: string) => void;
    onMessageSent?: (message: string) => void;
    onMessageReceived?: (message: string) => void;
}

export interface UseChatReturn {
    error: string | null;
    isLoading: boolean;
    messages: Message[];
    sendMessage: (content: string) => Promise<void>;
    clearMessages: () => void;
    clearError: () => void;
}

// Theme Types
export type ThemeMode = "light" | "dark" | "auto";
export type WidgetPosition =
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left";
export type LoadingSize = "small" | "medium" | "large";

// API Types
export interface OpenAIMessage {
    content: string;
    role: "system" | "user" | "assistant";
}
