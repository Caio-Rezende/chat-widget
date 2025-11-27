// src/stories/ChatWindow.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChatWindow } from '../components/ChatWindow';

const meta: Meta<typeof ChatWindow> = {
  title: 'Components/ChatWindow',
  component: ChatWindow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The complete chat window component that combines header, message list, and input components.',
      },
    },
  },
  argTypes: {
    apiKey: {
      description: 'OpenAI API key for chat functionality',
      control: { type: 'text' },
    },
    title: {
      description: 'Title displayed in the chat header',
      control: { type: 'text' },
    },
    placeholder: {
      description: 'Placeholder text for the message input',
      control: { type: 'text' },
    },
    welcomeMessage: {
      description: 'Initial welcome message shown when chat starts',
      control: { type: 'text' },
    },
    closeIcon: {
      description: 'Icon displayed in the close button',
      control: { type: 'text' },
    },
    sendIcon: {
      description: 'Icon displayed in the send button',
      control: { type: 'text' },
    },
    onClose: {
      description: 'Callback function when close button is clicked',
      action: 'close clicked',
    },
    onMessageSent: {
      description: 'Callback function when a message is sent',
      action: 'message sent',
    },
    onMessageReceived: {
      description: 'Callback function when a message is received',
      action: 'message received',
    },
    onError: {
      description: 'Callback function when an error occurs',
      action: 'error occurred',
    },
  },
  decorators: [
    (Story) => (
      <div style={{
        width: '350px',
        height: '500px',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: 'Chat Assistant',
    placeholder: 'Type your message...',
    welcomeMessage: 'Hello! How can I help you today?',
    closeIcon: '×',
    sendIcon: '→',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Customer Support variant
export const CustomerSupport: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: '🎧 Customer Support',
    placeholder: 'Describe your issue...',
    welcomeMessage: 'Hi there! I\'m here to help with any questions or issues you might have.',
    closeIcon: '×',
    sendIcon: '📤',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Sales Assistant variant
export const SalesAssistant: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: '💼 Sales Assistant',
    placeholder: 'Ask about our products...',
    welcomeMessage: 'Welcome! I\'m here to help you find the perfect solution for your needs.',
    closeIcon: '←',
    sendIcon: '▶',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Technical Support variant
export const TechnicalSupport: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: '🔧 Technical Support',
    placeholder: 'Describe the technical issue...',
    welcomeMessage: 'Hello! I\'m your technical support assistant. Please describe the issue you\'re experiencing.',
    closeIcon: '✕',
    sendIcon: '🚀',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Minimal variant
export const Minimal: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: 'Help',
    placeholder: 'Ask...',
    welcomeMessage: 'Hi!',
    closeIcon: '×',
    sendIcon: '→',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Detailed variant
export const Detailed: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: 'AI-Powered Customer Support Assistant',
    placeholder: 'Type your question here and I\'ll do my best to help...',
    welcomeMessage: 'Welcome to our AI-powered support system! I\'m here to assist you 24/7. Feel free to ask me anything about our products, services, or general inquiries.',
    closeIcon: '✕',
    sendIcon: '📨',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Multi-language variant
export const Spanish: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: 'Asistente de Chat',
    placeholder: 'Escribe tu mensaje...',
    welcomeMessage: '¡Hola! ¿Cómo puedo ayudarte hoy?',
    closeIcon: '×',
    sendIcon: '→',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Different icon styles
export const EmojiIcons: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: 'Chat Assistant',
    placeholder: 'Type your message...',
    welcomeMessage: 'Hello! How can I help you today?',
    closeIcon: '❌',
    sendIcon: '✈️',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Testing error handling
export const InvalidApiKey: Story = {
  args: {
    apiKey: 'invalid-key',
    title: 'Chat Assistant',
    placeholder: 'Type your message...',
    welcomeMessage: 'Hello! How can I help you today?',
    closeIcon: '×',
    sendIcon: '→',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates error handling when an invalid API key is used.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    apiKey: 'demo-key-for-storybook',
    title: 'Interactive Demo',
    placeholder: 'Try typing a message...',
    welcomeMessage: 'This is an interactive demo. Try sending a message!',
    closeIcon: '×',
    sendIcon: '→',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing the complete chat functionality. Note: Requires valid API key for actual responses.',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest: Story = {
  args: {
    apiKey: 'your-api-key-here',
    title: 'Accessibility Test',
    placeholder: 'Type your message...',
    welcomeMessage: 'Testing accessibility features...',
    closeIcon: '×',
    sendIcon: '→',
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates accessibility features: proper ARIA labels, keyboard navigation, and screen reader support.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Focus the input to demonstrate keyboard accessibility
    const input = canvasElement.querySelector('.chat-input');
    if (input) {
      (input as HTMLElement).focus();
    }
  },
};