import React from 'react';

interface ChatHeaderProps {
  title: string;
  closeIcon: string;
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  closeIcon,
  onClose
}) => {
  return (
    <div className="chat-header">
      <h3 className="chat-title">{title}</h3>
      <button
        className="chat-close-button"
        onClick={onClose}
        aria-label="Close chat"
        type="button"
      >
        {closeIcon}
      </button>
    </div>
  );
};
