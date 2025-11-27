import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  theme?: 'light' | 'dark' | 'auto';
  showTimestamp?: boolean;
  allowMarkdown?: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  message, 
  theme = 'light',
  showTimestamp = false,
  allowMarkdown = false
}) => {
  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Simple markdown rendering (you might want to use a library like react-markdown for more features)
  const renderContent = (content: string) => {
    if (!allowMarkdown) {
      return <div className="message-content">{content}</div>;
    }

    // Basic markdown support for **bold** and *italic*
    const processedContent = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>');

    return (
      <div 
        className="message-content"
        dangerouslySetInnerHTML={{ __html: processedContent }} 
      />
    );
  };

  const bubbleClasses = [
    'message-bubble',
    `message-bubble--${message.role}`,
    `message-bubble--${theme}`,
  ].filter(Boolean).join(' ');

  const timestampClasses = [
    'message-timestamp',
    `message-timestamp--${theme}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={bubbleClasses}>
      {renderContent(message.content)}
      {showTimestamp && (
        <div className={timestampClasses}>
          {formatTimestamp(message.timestamp)}
        </div>
      )}
    </div>
  );
};