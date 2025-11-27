import React, { useEffect, useRef } from 'react';
import { Message } from '../types';
import { MessageBubble } from './MessageBubble';
import { LoadingIndicator } from './LoadingIndicator';

interface MessageListProps {
  allowMarkdown?: boolean;
  error: string | null;
  isLoading: boolean;
  messages: Message[];
  showTimestamp?: boolean;
  theme?: 'light' | 'dark' | 'auto';
  onClearError: () => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  allowMarkdown = false,
  error,
  isLoading,
  messages,
  showTimestamp = false,
  theme = 'light',
  onClearError
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const messageListClasses = [
    'chat-messages',
    `chat-messages--${theme}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={messageListClasses}>
      {messages.length === 0 && !isLoading && (
        <div className={`welcome-message welcome-message--${theme}`}>
          Welcome! Send a message to start the conversation.
        </div>
      )}
      
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          theme={theme}
          showTimestamp={showTimestamp}
          allowMarkdown={allowMarkdown}
        />
      ))}
      
      {isLoading && <LoadingIndicator theme={theme} />}
      
      {error && (
        <div className={`error-message error-message--${theme}`}>
          <span>{error}</span>
          <button
            onClick={onClearError}
            className="error-close-button"
            aria-label="Clear error"
            type="button"
          >
            ✕
          </button>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};