import React from 'react';

interface LoadingIndicatorProps {
  theme?: 'light' | 'dark' | 'auto';
  size?: 'small' | 'medium' | 'large';
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ 
  theme = 'light', 
  size = 'medium' 
}) => {
  const bubbleClasses = [
    'message-bubble',
    'message-bubble--assistant',
    `message-bubble--${theme}`,
  ].filter(Boolean).join(' ');

  const indicatorClasses = [
    'loading-indicator',
    `loading-indicator--${size}`,
    `loading-indicator--${theme}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={bubbleClasses}>
      <div className={indicatorClasses}>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
};