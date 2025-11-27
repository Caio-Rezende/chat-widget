import React, { useEffect, useRef } from 'react';
import { Message } from '../types';
import { MessageBubble } from './MessageBubble';
import { LoadingIndicator } from './LoadingIndicator';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onClearError: () => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isLoading,
  error,
  onClearError
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="chat-messages">
      {messages.length === 0 && !isLoading && (
        <div className="welcome-message">
          Welcome! Send a message to start the conversation.
        </div>
      )}
      
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}
      
      {isLoading && <LoadingIndicator />}
      
      {error && (
        <div className="error-message">
          <span>{error}</span>
          <button
            onClick={onClearError}
            style={{ 
              marginLeft: '8px', 
              background: 'none', 
              border: 'none', 
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            ✕
          </button>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};
