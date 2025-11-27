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
  onClose,
  onMessageSent,
  onMessageReceived,
  onError,
}) => {
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearError
  } = useChat({
    apiKey,
    welcomeMessage,
    onMessageSent,
    onMessageReceived,
    onError,
  });

  return (
    <div className="chat-window chat-window--open">
      <ChatHeader
        title={title}
        closeIcon={closeIcon}
        onClose={onClose}
      />
      
      <MessageList
        messages={messages}
        isLoading={isLoading}
        error={error}
        onClearError={clearError}
      />
      
      <MessageInput
        placeholder={placeholder}
        sendIcon={sendIcon}
        isLoading={isLoading}
        onSendMessage={sendMessage}
      />
    </div>
  );
};
