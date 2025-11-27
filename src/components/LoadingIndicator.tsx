import React from 'react';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="message-bubble message-bubble--assistant">
      <div className="loading-indicator">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
};
