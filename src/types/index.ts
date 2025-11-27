// Core Message Types
export type MessageRole = 'user' | 'assistant' | 'system';

export interface Message {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: Date;
  isError?: boolean;
}

// Chat Widget Props
export interface ChatWidgetProps {
  apiKey: string;
  title?: string;
  placeholder?: string;
  welcomeMessage?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  height?: number;
  width?: number;
  maxHeight?: number;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  showTimestamp?: boolean;
  allowMarkdown?: boolean;
  buttonIcon?: string;
  closeIcon?: string;
  sendIcon?: string;
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  onError?: (error: string) => void;
  onToggle?: (isOpen: boolean) => void;
}

// Chat Window Props
export interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onSendMessage: (message: string) => void;
  onClearError: () => void;
  placeholder: string;
  theme: 'light' | 'dark';
  primaryColor: string;
  height: number;
  width: number;
  maxHeight: number;
  showTimestamp: boolean;
  allowMarkdown: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Chat Header Props
export interface ChatHeaderProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  theme: 'light' | 'dark';
  primaryColor: string;
  className?: string;
}

// Message List Props
export interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  theme: 'light' | 'dark';
  showTimestamp: boolean;
  allowMarkdown: boolean;
  className?: string;
}

// Message Bubble Props
export interface MessageBubbleProps {
  message: Message;
  theme: 'light' | 'dark';
  showTimestamp: boolean;
  allowMarkdown: boolean;
  className?: string;
}

// Message Input Props
export interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
  placeholder: string;
  theme: 'light' | 'dark';
  primaryColor: string;
  className?: string;
}

// Loading Indicator Props
export interface LoadingIndicatorProps {
  theme: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

// Hook Types
export interface UseChatProps {
  apiKey: string;
  welcomeMessage?: string;
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  onError?: (error: string) => void;
}

export interface UseChatReturn {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  clearError: () => void;
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'auto';
export type WidgetPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export type LoadingSize = 'small' | 'medium' | 'large';

// API Types
export interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: OpenAIMessage;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface OpenAIError {
  error: {
    message: string;
    type: string;
    code: string;
  };
}

// Utility Types
export interface ChatWidgetState {
  isOpen: boolean;
  isMinimized: boolean;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

// Event Handler Types
export type MessageHandler = (message: string) => void;
export type ErrorHandler = (error: string) => void;
export type ToggleHandler = (isOpen: boolean) => void;
export type VoidHandler = () => void;

// Style Types
export interface WidgetStyles {
  container?: React.CSSProperties;
  trigger?: React.CSSProperties;
  window?: React.CSSProperties;
  header?: React.CSSProperties;
  messageList?: React.CSSProperties;
  messageInput?: React.CSSProperties;
  messageBubble?: React.CSSProperties;
  loadingIndicator?: React.CSSProperties;
}

// Configuration Types
export interface ChatConfig {
  apiKey: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
  systemMessage?: string;
  retryAttempts?: number;
  retryDelay?: number;
  timeout?: number;
}

// Animation Types
export type AnimationDuration = 'fast' | 'normal' | 'slow';
export type AnimationType = 'fade' | 'slide' | 'scale' | 'none';

export interface AnimationConfig {
  duration: AnimationDuration;
  type: AnimationType;
  easing?: string;
}

// Accessibility Types
export interface A11yProps {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  tabIndex?: number;
}
