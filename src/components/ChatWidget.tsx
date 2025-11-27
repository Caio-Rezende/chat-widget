import React, { useState, useRef, useEffect } from 'react';
import { ChatWidgetProps } from '../types';
import { ChatWindow } from './ChatWindow';
import '../styles/widget.css';

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

  const widgetClasses = [
    'chat-widget',
    `chat-widget--${position}`,
    `chat-widget--${theme}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={widgetRef}
      className={widgetClasses}
      style={style}
    >
      {/* Toggle Button */}
      <button
        className="chat-toggle-button"
        onClick={handleToggle}
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
