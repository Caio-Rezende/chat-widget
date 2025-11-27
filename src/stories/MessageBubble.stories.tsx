import type { Meta, StoryObj } from '@storybook/react';
import { MessageBubble } from '../components/MessageBubble';
import { Message, MessageRole } from '../types';

// Helper function to create mock messages
const createMockMessage = (
  content: string,
  role: MessageRole,
  id?: string,
  timestamp?: Date
): Message => ({
  id: id || `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  content,
  role,
  timestamp: timestamp || new Date(),
});

const meta: Meta<typeof MessageBubble> = {
  title: 'Components/MessageBubble',
  component: MessageBubble,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A message bubble component that displays individual chat messages with timestamps and role-based styling.',
      },
    },
  },
  argTypes: {
    message: {
      description: 'The message object containing content, role, timestamp, and id',
      control: { type: 'object' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '400px', 
        padding: '16px', 
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// User message
export const UserMessage: Story = {
  args: {
    message: createMockMessage(
      'Hello! I need help with my account settings.',
      'user',
      'user-1',
      new Date('2024-01-15T10:30:00Z')
    ),
  },
};

// Assistant message
export const AssistantMessage: Story = {
  args: {
    message: createMockMessage(
      'Hello! I\'d be happy to help you with your account settings. What specific settings would you like to modify?',
      'assistant',
      'assistant-1',
      new Date('2024-01-15T10:30:30Z')
    ),
  },
};

// System message
export const SystemMessage: Story = {
  args: {
    message: createMockMessage(
      'Welcome to the chat! How can I assist you today?',
      'system',
      'system-1',
      new Date('2024-01-15T10:00:00Z')
    ),
  },
};

// Long message content
export const LongUserMessage: Story = {
  args: {
    message: createMockMessage(
      'I have been trying to update my profile information for the past few days, but I keep encountering an error message that says "Unable to save changes". I have tried refreshing the page, clearing my browser cache, and even trying from a different browser, but the issue persists. Could you please help me understand what might be causing this problem and how I can resolve it?',
      'user',
      'user-long',
      new Date('2024-01-15T10:45:00Z')
    ),
  },
};

export const LongAssistantMessage: Story = {
  args: {
    message: createMockMessage(
      'I understand your frustration with the profile update issue. This error typically occurs due to one of several reasons: 1) Network connectivity issues, 2) Browser compatibility problems, 3) Temporary server issues, or 4) Invalid data format in one of the fields. Let me guide you through some troubleshooting steps that should resolve this issue. First, please try updating your profile information one field at a time to identify if a specific field is causing the problem.',
      'assistant',
      'assistant-long',
      new Date('2024-01-15T10:45:30Z')
    ),
  },
};

// Short messages
export const ShortUserMessage: Story = {
  args: {
    message: createMockMessage(
      'Thanks!',
      'user',
      'user-short',
      new Date('2024-01-15T11:00:00Z')
    ),
  },
};

export const ShortAssistantMessage: Story = {
  args: {
    message: createMockMessage(
      'You\'re welcome!',
      'assistant',
      'assistant-short',
      new Date('2024-01-15T11:00:15Z')
    ),
  },
};

// Messages with special characters and formatting
export const MessageWithEmojis: Story = {
  args: {
    message: createMockMessage(
      'Great! 🎉 That worked perfectly! Thank you so much! 😊👍',
      'user',
      'user-emoji',
      new Date('2024-01-15T11:15:00Z')
    ),
  },
};

export const MessageWithCode: Story = {
  args: {
    message: createMockMessage(
      'You can use the following code snippet: `console.log("Hello World");` to test your setup.',
      'assistant',
      'assistant-code',
      new Date('2024-01-15T11:15:30Z')
    ),
  },
};

export const MessageWithNumbers: Story = {
  args: {
    message: createMockMessage(
      'My order number is #12345 and the total amount was $99.99. The delivery is scheduled for January 15, 2024.',
      'user',
      'user-numbers',
      new Date('2024-01-15T11:30:00Z')
    ),
  },
};

// Messages with different timestamps
export const RecentMessage: Story = {
  args: {
    message: createMockMessage(
      'This message was sent just now.',
      'user',
      'user-recent',
      new Date()
    ),
  },
};

export const OldMessage: Story = {
  args: {
    message: createMockMessage(
      'This is an older message from yesterday.',
      'assistant',
      'assistant-old',
      new Date('2024-01-14T15:30:00Z')
    ),
  },
};

// Error message (if your Message type supports it)
export const ErrorMessage: Story = {
  args: {
    message: {
      ...createMockMessage(
        'Failed to send message. Please try again.',
        'system',
        'error-1',
        new Date('2024-01-15T11:45:00Z')
      ),
      isError: true,
    },
  },
};

// Multiple messages in conversation context
export const ConversationContext: Story = {
  decorators: [
    (Story) => (
      <div style={{ 
        width: '400px', 
        padding: '16px', 
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <MessageBubble message={createMockMessage('Hi there!', 'user', 'conv-1')} />
        <MessageBubble message={createMockMessage('Hello! How can I help you?', 'assistant', 'conv-2')} />
        <Story />
      </div>
    ),
  ],
  args: {
    message: createMockMessage(
      'I need help with my order.',
      'user',
      'conv-3',
      new Date()
    ),
  },
};