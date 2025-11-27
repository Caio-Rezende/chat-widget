import React, { useState, useRef, KeyboardEvent } from 'react';

interface MessageInputProps {
  placeholder: string;
  sendIcon: string;
  isLoading: boolean;
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  onSendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  sendIcon,
  isLoading,
  theme = 'light',
  primaryColor,
  onSendMessage
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage && !isLoading) {
      onSendMessage(trimmedMessage);
      setMessage('');
      
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  // Create computed styles for theming
  const containerStyle: React.CSSProperties = {
    ...(primaryColor && {
      '--chat-primary-color': primaryColor,
    } as React.CSSProperties),
  };

  const containerClasses = [
    'chat-input-container',
    `chat-input-container--${theme}`,
  ].filter(Boolean).join(' ');

  const inputClasses = [
    'chat-input',
    `chat-input--${theme}`,
  ].filter(Boolean).join(' ');

  const buttonClasses = [
    'chat-send-button',
    `chat-send-button--${theme}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={containerStyle}>
      <textarea
        ref={textareaRef}
        className={inputClasses}
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        rows={1}
        disabled={isLoading}
      />
      <button
        className={buttonClasses}
        onClick={handleSend}
        disabled={!message.trim() || isLoading}
        aria-label="Send message"
        type="button"
      >
        {sendIcon}
      </button>
    </div>
  );
};