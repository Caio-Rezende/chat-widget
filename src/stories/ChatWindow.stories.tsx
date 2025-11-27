import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChatWindow } from '../components/ChatWindow';
import { ThemeMode } from '../types';

const meta: Meta<typeof ChatWindow> = {
  title: 'Components/ChatWindow',
  component: ChatWindow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The complete chat window component that combines header, message list, and input components into a fully functional chat interface.

**Features:**
- Complete chat functionality with OpenAI integration
- Real-time message handling with loading states
- Error handling and recovery
- Customizable theming and branding
- Responsive design with configurable dimensions
- Markdown support for rich text messages
- Timestamp display options
- Online/offline status indication
- Accessibility features with ARIA labels

**Architecture:**
- Uses the \`useChat\` hook for state management
- Combines \`ChatHeader\`, \`MessageList\`, and \`MessageInput\` components
- Handles API communication and error states
- Supports custom styling through CSS custom properties
        `,
      },
    },
  },
  argTypes: {
    apiKey: {
      description: 'OpenAI API key for chat functionality',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: 'API',
      },
    },
    title: {
      description: 'Title displayed in the chat header',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Chat Assistant' },
        category: 'Content',
      },
    },
    welcomeMessage: {
      description: 'Initial welcome message shown when chat starts',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello! How can I help you today?' },
        category: 'Content',
      },
    },
    placeholder: {
      description: 'Placeholder text for the message input',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Type your message...' },
        category: 'Content',
      },
    },
    closeIcon: {
      description: 'Icon displayed in the close button',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '×' },
        category: 'Icons',
      },
    },
    sendIcon: {
      description: 'Icon displayed in the send button',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '→' },
        category: 'Icons',
      },
    },
    theme: {
      description: 'Theme mode for the chat window',
      control: { type: 'select' },
      options: ['light', 'dark', 'auto'] as ThemeMode[],
      table: {
        type: { summary: 'ThemeMode' },
        defaultValue: { summary: 'light' },
        category: 'Appearance',
      },
    },
    primaryColor: {
      description: 'Primary color for theming (CSS color value)',
      control: { type: 'color' },
      table: {
        type: { summary: 'string' },
        category: 'Appearance',
      },
    },
    isOnline: {
      description: 'Whether the chat service is online',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Status',
      },
    },
    disabled: {
      description: 'Whether the chat input is disabled',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Status',
      },
    },
    allowMarkdown: {
      description: 'Enable markdown rendering in messages',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Features',
      },
    },
    showTimestamp: {
      description: 'Show timestamps on messages',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Features',
      },
    },
    height: {
      description: 'Height of the chat window in pixels',
      control: { type: 'number', min: 300, max: 800, step: 50 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '500' },
        category: 'Layout',
      },
    },
    width: {
      description: 'Width of the chat window in pixels',
      control: { type: 'number', min: 250, max: 500, step: 25 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '350' },
        category: 'Layout',
      },
    },
    maxHeight: {
      description: 'Maximum height of the chat window in pixels',
      control: { type: 'number', min: 400, max: 1000, step: 50 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '600' },
        category: 'Layout',
      },
    },
    onClose: {
      description: 'Callback function when close button is clicked',
      action: 'close clicked',
      table: {
        type: { summary: '() => void' },
        category: 'Events',
      },
    },
    onMessageSent: {
      description: 'Callback function when a message is sent',
      action: 'message sent',
      table: {
        type: { summary: '(message: string) => void' },
        category: 'Events',
      },
    },
    onMessageReceived: {
      description: 'Callback function when a message is received',
      action: 'message received',
      table: {
        type: { summary: '(message: string) => void' },
        category: 'Events',
      },
    },
    onError: {
      description: 'Callback function when an error occurs',
      action: 'error occurred',
      table: {
        type: { summary: '(error: string) => void' },
        category: 'Events',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{
        width: 'fit-content',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        backgroundColor: 'white',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with mock API key
export const Default: Story = {
  args: {
    apiKey: 'mock-api-key-for-demo',
    title: 'Chat Assistant',
    welcomeMessage: 'Hello! How can I help you today?',
    placeholder: 'Type your message...',
    closeIcon: '×',
    sendIcon: '→',
    theme: 'light',
    isOnline: true,
    disabled: false,
    allowMarkdown: false,
    showTimestamp: false,
    height: 500,
    width: 350,
    maxHeight: 600,
    onClose: fn(),
    onMessageSent: fn(),
    onMessageReceived: fn(),
    onError: fn(),
  },
};

// Theme variations
export const LightTheme: Story = {
  args: {
    ...Default.args,
    theme: 'light',
    title: 'Light Theme Chat',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with light theme - ideal for bright environments and clean interfaces.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: 'dark',
    title: 'Dark Theme Chat',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with dark theme - perfect for low-light environments and modern interfaces.',
      },
    },
  },
};

export const AutoTheme: Story = {
  args: {
    ...Default.args,
    theme: 'auto',
    title: 'Auto Theme Chat',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with auto theme that adapts to system preferences.',
      },
    },
  },
};

// Color theming
export const CustomBranding: Story = {
  args: {
    ...Default.args,
    title: 'Branded Chat',
    primaryColor: '#6f33b7',
    welcomeMessage: 'Welcome to our branded chat experience!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with custom primary color branding.',
      },
    },
  },
};

export const BlueTheme: Story = {
  args: {
    ...Default.args,
    title: 'Tech Support',
    primaryColor: '#3b82f6',
    welcomeMessage: 'Hi! I\'m here to help with technical questions.',
  },
};

export const GreenTheme: Story = {
  args: {
    ...Default.args,
    title: 'Sales Assistant',
    primaryColor: '#10b981',
    welcomeMessage: 'Hello! Ready to find the perfect solution for you?',
  },
};

export const RedTheme: Story = {
  args: {
    ...Default.args,
    title: 'Emergency Support',
    primaryColor: '#ef4444',
    welcomeMessage: 'Emergency support is here to help immediately.',
  },
};

// Feature variations
export const WithMarkdown: Story = {
  args: {
    ...Default.args,
    allowMarkdown: true,
    title: 'Markdown Chat',
    welcomeMessage: 'Hello! I support **bold**, *italic*, and `code` formatting.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with markdown support enabled for rich text formatting.',
      },
    },
  },
};

export const WithTimestamps: Story = {
  args: {
    ...Default.args,
    showTimestamp: true,
    title: 'Timestamped Chat',
    welcomeMessage: 'All messages will show timestamps.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with timestamps displayed on all messages.',
      },
    },
  },
};

export const FullFeatures: Story = {
  args: {
    ...Default.args,
    allowMarkdown: true,
    showTimestamp: true,
    title: '🚀 Full Featured Chat',
    welcomeMessage: 'Welcome! This chat supports **markdown** and shows *timestamps*.',
    primaryColor: '#6f33b7',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with all features enabled: markdown, timestamps, and custom branding.',
      },
    },
  },
};

// Status variations
export const OnlineChat: Story = {
  args: {
    ...Default.args,
    isOnline: true,
    title: 'Live Support',
    welcomeMessage: 'We\'re online and ready to help!',
    primaryColor: '#10b981',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window showing online status with green branding.',
      },
    },
  },
};

export const OfflineChat: Story = {
  args: {
    ...Default.args,
    isOnline: false,
    title: 'Support (Offline)',
    welcomeMessage: 'We\'re currently offline. Leave a message and we\'ll get back to you!',
    primaryColor: '#6b7280',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window showing offline status - users can still send messages.',
      },
    },
  },
};

export const DisabledChat: Story = {
  args: {
    ...Default.args,
    disabled: true,
    title: 'Maintenance Mode',
    welcomeMessage: 'Chat is temporarily disabled for maintenance.',
    primaryColor: '#ef4444',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window with input disabled - prevents sending new messages.',
      },
    },
  },
};

// Size variations
export const CompactSize: Story = {
  args: {
    ...Default.args,
    height: 350,
    width: 280,
    title: 'Compact Chat',
    welcomeMessage: 'Compact chat for smaller spaces.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Smaller chat window suitable for tight spaces or mobile interfaces.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    height: 600,
    width: 450,
    maxHeight: 800,
    title: 'Large Chat Window',
    welcomeMessage: 'Spacious chat window for detailed conversations.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Larger chat window providing more space for conversations.',
      },
    },
  },
};

export const TallWindow: Story = {
  args: {
    ...Default.args,
    height: 700,
    width: 320,
    title: 'Tall Chat',
    welcomeMessage: 'Tall window for viewing more message history.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tall, narrow chat window optimized for viewing message history.',
      },
    },
  },
};

// Different use cases
export const CustomerSupport: Story = {
  args: {
    ...Default.args,
    title: '🎧 Customer Support',
    welcomeMessage: 'Hi there! I\'m here to help with any questions about our products or services.',
    primaryColor: '#3b82f6',
    allowMarkdown: true,
    showTimestamp: true,
    placeholder: 'Describe your issue...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Customer support chat configuration with helpful branding and features.',
      },
    },
  },
};

export const SalesAssistant: Story = {
  args: {
    ...Default.args,
    title: '💼 Sales Assistant',
    welcomeMessage: 'Welcome! I\'m here to help you find the perfect solution. What are you looking for?',
    primaryColor: '#10b981',
    placeholder: 'Tell me about your needs...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sales-focused chat with encouraging messaging and green branding.',
      },
    },
  },
};

export const TechnicalSupport: Story = {
  args: {
    ...Default.args,
    title: '🔧 Technical Support',
    welcomeMessage: 'Technical support here! Please describe the issue you\'re experiencing.',
    primaryColor: '#f59e0b',
    allowMarkdown: true,
    showTimestamp: true,
    placeholder: 'Describe the technical issue...',
    isOnline: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Technical support chat with markdown for code snippets and detailed explanations.',
      },
    },
  },
};

export const AIAssistant: Story = {
  args: {
    ...Default.args,
    title: '🤖 AI Assistant',
    welcomeMessage: 'Hello! I\'m an AI assistant powered by ChatGPT. How can I help you today?',
    primaryColor: '#6f33b7',
    allowMarkdown: true,
    showTimestamp: false,
    placeholder: 'Ask me anything...',
  },
  parameters: {
    docs: {
      description: {
        story: 'AI-focused chat highlighting the ChatGPT integration with modern branding.',
      },
    },
  },
};

// Icon variations
export const CustomIcons: Story = {
  args: {
    ...Default.args,
    closeIcon: '✕',
    sendIcon: '📤',
    title: 'Custom Icons',
    welcomeMessage: 'Chat with custom icons for close and send buttons.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat window demonstrating custom icons for interactive elements.',
      },
    },
  },
};

export const EmojiIcons: Story = {
  args: {
    ...Default.args,
    closeIcon: '❌',
    sendIcon: '🚀',
    title: '😊 Emoji Chat',
    welcomeMessage: 'Fun chat with emoji icons! 🎉',
  },
  parameters: {
    docs: {
      description: {
        story: 'Playful chat interface using emoji icons for a friendly feel.',
      },
    },
  },
};

// Interactive demonstrations
export const InteractiveDemo: Story = {
  args: {
    ...Default.args,
    title: 'Interactive Demo',
    welcomeMessage: 'Try typing a message! (Note: This is a demo with mock API)',
    primaryColor: '#6f33b7',
    allowMarkdown: true,
    showTimestamp: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing full chat functionality (uses mock API responses).',
      },
    },
  },
};

// Error handling showcase
export const ErrorHandling: Story = {
  args: {
    ...Default.args,
    apiKey: 'invalid-key',
    title: 'Error Handling Demo',
    welcomeMessage: 'This demo shows error handling with an invalid API key.',
    primaryColor: '#ef4444',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates error handling when API requests fail.',
      },
    },
  },
};

// Comparison showcase
export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <ChatWindow
        apiKey="mock-key"
        title="Light Theme"
        welcomeMessage="Light theme example"
        placeholder="Type here..."
        closeIcon="×"
        sendIcon="→"
        theme="light"
        height={400}
        width={300}
        onClose={fn()}
      />
      <ChatWindow
        apiKey="mock-key"
        title="Dark Theme"
        welcomeMessage="Dark theme example"
        placeholder="Type here..."
        closeIcon="×"
        sendIcon="→"
        theme="dark"
        height={400}
        width={300}
        onClose={fn()}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of light and dark themes.',
      },
    },
  },
};

export const StatusComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <ChatWindow
        apiKey="mock-key"
        title="Online Support"
        welcomeMessage="We're online!"
        placeholder="Type here..."
        closeIcon="×"
        sendIcon="→"
        isOnline={true}
        primaryColor="#10b981"
        height={400}
        width={300}
        onClose={fn()}
      />
      <ChatWindow
        apiKey="mock-key"
        title="Offline Support"
        welcomeMessage="Currently offline"
        placeholder="Leave a message..."
        closeIcon="×"
        sendIcon="→"
        isOnline={false}
        primaryColor="#6b7280"
        height={400}
        width={300}
        onClose={fn()}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of online and offline status indicators.',
      },
    },
  },
};