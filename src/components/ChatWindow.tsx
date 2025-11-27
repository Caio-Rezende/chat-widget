import React from 'react';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useChat } from '../hooks/useChat';

interface ChatWindowProps {
  allowMarkdown?: boolean;
  apiKey: string;
  closeIcon: string;
  disabled?: boolean;
  height?: number;
  isOnline?: boolean;
  maxHeight?: number;
  placeholder: string;
  primaryColor?: string;
  sendIcon: string;
  showTimestamp?: boolean;
  style?: React.CSSProperties;
  theme?: 'light' | 'dark' | 'auto';
  title: string;
  welcomeMessage: string;
  width?: number;
  onClose: () => void;
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  onError?: (error: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  allowMarkdown = false,
  apiKey,
  closeIcon,
  disabled = false,
  isOnline = true,
  placeholder,
  primaryColor,
  sendIcon,
  showTimestamp = false,
  style = {},
  theme = 'light',
  title,
  welcomeMessage,
  onClose,
  onMessageSent,
  onMessageReceived,
  onError,
}) => {
  const { messages, isLoading, error, sendMessage, clearError } = useChat({
    apiKey,
    welcomeMessage,
    onMessageSent,
    onMessageReceived,
    onError,
  });

  const windowStyle: React.CSSProperties = {
    ...style,
    ...(primaryColor && {
      '--chat-primary-color': primaryColor,
    } as React.CSSProperties),
  };

  return (
    <div 
      className={`chat-window chat-window--open chat-window--${theme}`}
      style={windowStyle}
    >
      <ChatHeader 
        closeIcon={closeIcon} 
        isOnline={isOnline}
        primaryColor={primaryColor}
        theme={theme}
        title={title} 
        onClose={onClose}
      />
      <MessageList 
        allowMarkdown={allowMarkdown}
        error={error} 
        isLoading={isLoading} 
        messages={messages} 
        showTimestamp={showTimestamp}
        theme={theme}
        onClearError={clearError} 
      />
      <MessageInput 
        isLoading={isLoading || disabled}
        placeholder={placeholder} 
        primaryColor={primaryColor}
        sendIcon={sendIcon} 
        theme={theme}
        onSendMessage={sendMessage} 
      />
    </div>
  );
};