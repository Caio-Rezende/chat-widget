import React, { useState, useRef, useEffect } from 'react';
import { ChatWidgetProps } from '../types';
import { ChatWindow } from './ChatWindow';

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  allowMarkdown = false,
  apiKey,
  buttonIcon = '💬',
  className = '',
  closeIcon = '×',
  disabled = false,
  height = 500,
  isOnline = false,
  maxHeight = 600,
  placeholder = 'Type your message...',
  position = 'bottom-right',
  primaryColor,
  sendIcon = '→',
  showTimestamp = false,
  style = {},
  theme = 'light',
  title = 'Chat Assistant',
  userId = '',
  welcomeMessage = 'Hello! How can I help you today?',
  width = 350,
  onToggle,
  onMessageSent,
  onMessageReceived,
  onError,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (disabled) return;
    
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
      if (isOpen) {
        setIsOpen(false);
        onToggle?.(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Create computed styles for the widget
  const computedStyle: React.CSSProperties = {
    ...style,
    ...(primaryColor && {
      '--chat-primary-color': primaryColor,
    } as React.CSSProperties),
  };

  // Create styles for the chat window
  const chatWindowStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    maxHeight: `${maxHeight}px`,
  };

  const widgetClasses = [
    'chat-widget',
    `chat-widget--${position}`,
    `chat-widget--${theme}`,
    disabled && 'chat-widget--disabled',
    !isOnline && 'chat-widget--offline',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={widgetRef}
      className={widgetClasses}
      style={computedStyle}
    >
      {/* Toggle Button */}
      <button
        className="chat-toggle-button"
        onClick={handleToggle}
        disabled={disabled}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        type="button"
      >
        {isOpen ? closeIcon : buttonIcon}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <ChatWindow
          allowMarkdown={allowMarkdown}
          apiKey={apiKey}
          closeIcon={closeIcon}
          disabled={disabled || !isOnline}
          height={height}
          isOnline={isOnline}
          maxHeight={maxHeight}
          placeholder={placeholder}
          primaryColor={primaryColor}
          sendIcon={sendIcon}
          showTimestamp={showTimestamp}
          style={chatWindowStyle}
          theme={theme}
          title={title}
          userId={userId}
          welcomeMessage={welcomeMessage}
          width={width}
          onClose={() => {
            setIsOpen(false);
            onToggle?.(false);
          }}
          onMessageSent={onMessageSent}
          onMessageReceived={onMessageReceived}
          onError={onError}
        />
      )}
    </div>
  );
};