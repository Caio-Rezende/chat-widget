import React from 'react';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useChat } from '../hooks/useChat';

interface ChatWindowProps {
  apiKey: string;
  title: string;
  placeholder: string;
  welcomeMessage: string;
  closeIcon: string;
  sendIcon: string;
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  height?: number;
  width?: number;
  maxHeight?: number;
  showTimestamp?: boolean;
  allowMarkdown?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClose: () => void;
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  onError?: (error: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  apiKey,
  title,
  placeholder,
  welcomeMessage,
  closeIcon,
  sendIcon,
  theme = 'light',
  primaryColor,
  showTimestamp = false,
  allowMarkdown = false,
  disabled = false,
  style = {},
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
        title={title} 
        closeIcon={closeIcon} 
        onClose={onClose}
        theme={theme}
        primaryColor={primaryColor}
      />
      <MessageList 
        messages={messages} 
        isLoading={isLoading} 
        error={error} 
        theme={theme}
        showTimestamp={showTimestamp}
        allowMarkdown={allowMarkdown}
        onClearError={clearError} 
      />
      <MessageInput 
        placeholder={placeholder} 
        sendIcon={sendIcon} 
        isLoading={isLoading || disabled}
        theme={theme}
        primaryColor={primaryColor}
        onSendMessage={sendMessage} 
      />
    </div>
  );
};