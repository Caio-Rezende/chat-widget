import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChatHeader } from '../components/ChatHeader';

const meta: Meta<typeof ChatHeader> = {
  title: 'Components/ChatHeader',
  component: ChatHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A header component for the chat window that displays the title and close button.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'The title text displayed in the header',
      control: { type: 'text' },
    },
    closeIcon: {
      description: 'Icon or text to display in the close button',
      control: { type: 'text' },
    },
    onClose: {
      description: 'Callback function when close button is clicked',
      action: 'close clicked',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '400px', 
        border: '1px solid #e0e0e0', 
        borderRadius: '8px 8px 0 0',
        overflow: 'hidden'
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
    title: 'Chat Assistant',
    closeIcon: '×',
    onClose: fn(),
  },
};

// Different titles
export const CustomTitle: Story = {
  args: {
    title: 'Customer Support',
    closeIcon: '×',
    onClose: fn(),
  },
};

export const LongTitle: Story = {
  args: {
    title: 'AI-Powered Customer Support Assistant',
    closeIcon: '×',
    onClose: fn(),
  },
};

export const ShortTitle: Story = {
  args: {
    title: 'Help',
    closeIcon: '×',
    onClose: fn(),
  },
};

// Different close icons
export const WithEmojiClose: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '✕',
    onClose: fn(),
  },
};

export const WithArrowClose: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '←',
    onClose: fn(),
  },
};

export const WithTextClose: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: 'Close',
    onClose: fn(),
  },
};

export const WithMinimizeIcon: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '−',
    onClose: fn(),
  },
};

// Different scenarios
export const SupportChat: Story = {
  args: {
    title: '🎧 Live Support',
    closeIcon: '×',
    onClose: fn(),
  },
};

export const SalesChat: Story = {
  args: {
    title: '💼 Sales Assistant',
    closeIcon: '×',
    onClose: fn(),
  },
};

export const TechnicalSupport: Story = {
  args: {
    title: '🔧 Technical Support',
    closeIcon: '×',
    onClose: fn(),
  },
};

// Accessibility test
export const AccessibilityTest: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '×',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the accessibility features: proper ARIA labels and keyboard navigation.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    title: 'Interactive Chat',
    closeIcon: '×',
    onClose: fn(),
  },
  play: async ({ canvasElement }) => {
    // This demonstrates the interactive close button
    const closeButton = canvasElement.querySelector('.chat-close-button');
    if (closeButton) {
      // Focus the close button to show keyboard accessibility
      (closeButton as HTMLElement).focus();
    }
  },
};