// Main entry point for the chat widget package
export { ChatWidget } from './components/ChatWidget';
export { useChat } from './hooks/useChat';
export type { 
  ChatWidgetProps, 
  Message,
} from './types';

// CSS import for consumers
import './styles/widget.css';
