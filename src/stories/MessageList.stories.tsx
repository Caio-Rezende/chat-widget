import type { Meta, StoryObj } from '@storybook/react';
import { MessageList } from '../components/MessageList';
import { Message } from '../types';

// Mock data for stories
const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    role: 'assistant',
    timestamp: new Date('2024-01-15T10:00:00Z'),
  },
  {
    id: '2',
    content: 'I need help with my account settings',
    role: 'user',
    timestamp: new Date('2024-01-15T10:01:00Z'),
  },
  {
    id: '3',
    content: 'I can help you with that. What specific settings would you like to modify?',
    role: 'assistant',
    timestamp: new Date('2024-01-15T10:02:00Z'),
  },
];

const meta: Meta<typeof MessageList> = {
  title: 'Components/MessageList',
  component: MessageList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component that displays a list of chat messages with loading and error states.',
      },
    },
  },
  argTypes: {
    messages: {
      description: 'Array of messages to display',
      control: { type: 'object' },
    },
    isLoading: {
      description: 'Whether the chat is currently loading',
      control: { type: 'boolean' },
    },
    error: {
      description: 'Error message to display',
      control: { type: 'text' },
    },
    onClearError: {
      description: 'Callback to clear the error state',
      action: 'error cleared',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '500px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with messages
export const Default: Story = {
  args: {
    messages: mockMessages,
    isLoading: false,
    error: null,
    onClearError: () => {},
  },
};

// Empty state
export const Empty: Story = {
  args: {
    messages: [],
    isLoading: false,
    error: null,
    onClearError: () => {},
  },
};

// Loading state
export const Loading: Story = {
  args: {
    messages: mockMessages,
    isLoading: true,
    error: null,
    onClearError: () => {},
  },
};

// Loading with empty messages
export const LoadingEmpty: Story = {
  args: {
    messages: [],
    isLoading: true,
    error: null,
    onClearError: () => {},
  },
};

// Error state
export const WithError: Story = {
  args: {
    messages: mockMessages,
    isLoading: false,
    error: 'Failed to send message. Please try again.',
    onClearError: () => {},
  },
};

// Error with empty messages
export const ErrorEmpty: Story = {
  args: {
    messages: [],
    isLoading: false,
    error: 'Connection failed. Please check your internet connection.',
    onClearError: () => {},
  },
};

// Single message
export const SingleMessage: Story = {
  args: {
    messages: [mockMessages[0]],
    isLoading: false,
    error: null,
    onClearError: () => {},
  },
};

// Long conversation
export const LongConversation: Story = {
  args: {
    messages: [
      ...mockMessages,
      {
        id: '4',
        content: 'I want to change my email address and update my profile picture.',
        role: 'user',
        timestamp: new Date('2024-01-15T10:03:00Z'),
      },
      {
        id: '5',
        content: 'Sure! To change your email address, go to Settings > Profile > Email. For your profile picture, click on your current avatar in the top right corner and select "Change Photo".',
        role: 'assistant',
        timestamp: new Date('2024-01-15T10:04:00Z'),
      },
      {
        id: '6',
        content: 'Thank you! That was very helpful.',
        role: 'user',
        timestamp: new Date('2024-01-15T10:05:00Z'),
      },
    ],
    isLoading: false,
    error: null,
    onClearError: () => {},
  },
};