import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MessageInput } from '../components/MessageInput';

const meta: Meta<typeof MessageInput> = {
  title: 'Components/MessageInput',
  component: MessageInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A text input component for sending messages with auto-resize textarea and loading states.',
      },
    },
  },
  argTypes: {
    placeholder: {
      description: 'Placeholder text for the input field',
      control: { type: 'text' },
    },
    sendIcon: {
      description: 'Icon or text to display in the send button',
      control: { type: 'text' },
    },
    isLoading: {
      description: 'Whether the input is in loading state (disabled)',
      control: { type: 'boolean' },
    },
    onSendMessage: {
      description: 'Callback function when message is sent',
      action: 'message sent',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '400px', 
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
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
    placeholder: 'Type your message...',
    sendIcon: '→',
    isLoading: false,
    onSendMessage: fn(),
  },
};

// Loading state
export const Loading: Story = {
  args: {
    placeholder: 'Type your message...',
    sendIcon: '→',
    isLoading: true,
    onSendMessage: fn(),
  },
};

// Different placeholder text
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Ask me anything...',
    sendIcon: '→',
    isLoading: false,
    onSendMessage: fn(),
  },
};

// Different send icons
export const WithEmojiIcon: Story = {
  args: {
    placeholder: 'Type your message...',
    sendIcon: '📤',
    isLoading: false,
    onSendMessage: fn(),
  },
};

export const WithTextIcon: Story = {
  args: {
    placeholder: 'Type your message...',
    sendIcon: 'Send',
    isLoading: false,
    onSendMessage: fn(),
  },
};

export const WithArrowIcon: Story = {
  args: {
    placeholder: 'Type your message...',
    sendIcon: '▶',
    isLoading: false,
    onSendMessage: fn(),
  },
};

// Long placeholder text
export const LongPlaceholder: Story = {
  args: {
    placeholder: 'Type your message here and press Enter to send, or Shift+Enter for new line...',
    sendIcon: '→',
    isLoading: false,
    onSendMessage: fn(),
  },
};

// Interactive example with pre-filled text (for demonstration)
export const WithPrefilledText: Story = {
  args: {
    placeholder: 'Type your message...',
    sendIcon: '→',
    isLoading: false,
    onSendMessage: fn(),
  },
  play: async ({ canvasElement }) => {
    // This will demonstrate the auto-resize functionality
    const textarea = canvasElement.querySelector('textarea');
    if (textarea) {
      textarea.value = 'This is a longer message that should demonstrate the auto-resize functionality of the textarea component.';
      // Trigger the input event to simulate typing
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
    }
  },
};

// Accessibility test
export const AccessibilityTest: Story = {
  args: {
    placeholder: 'Type your message...',
    sendIcon: '→',
    isLoading: false,
    onSendMessage: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the accessibility features: keyboard navigation, ARIA labels, and proper focus management.',
      },
    },
  },
};