import React, { useState, useRef, useEffect } from 'react';
import { ChatWidgetProps } from '../types';
import { ChatWindow } from './ChatWindow';

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  apiKey,
  position = 'bottom-right',
  theme = 'light',
  title = 'Chat Assistant',
  placeholder = 'Type your message...',
  welcomeMessage = 'Hello! How can I help you today?',
  buttonIcon = '💬',
  closeIcon = '×',
  sendIcon = '→',
  primaryColor,
  height = 500,
  width = 350,
  maxHeight = 600,
  disabled = false,
  showTimestamp = false,
  allowMarkdown = false,
  onToggle,
  onMessageSent,
  onMessageReceived,
  onError,
  className = '',
  style = {},
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
          apiKey={apiKey}
          title={title}
          placeholder={placeholder}
          welcomeMessage={welcomeMessage}
          closeIcon={closeIcon}
          sendIcon={sendIcon}
          theme={theme}
          primaryColor={primaryColor}
          height={height}
          width={width}
          maxHeight={maxHeight}
          showTimestamp={showTimestamp}
          allowMarkdown={allowMarkdown}
          disabled={disabled}
          style={chatWindowStyle}
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