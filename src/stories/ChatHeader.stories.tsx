import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChatHeader } from '../components/ChatHeader';
import { ThemeMode } from '../types';

const meta: Meta<typeof ChatHeader> = {
  title: 'Components/ChatHeader',
  component: ChatHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A header component for the chat window that displays the title, online status, and close button.

**Features:**
- Customizable theme (light, dark, auto)
- Online/offline status indicator
- Primary color theming support
- Accessible close button with ARIA label
- Responsive design
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'The title text displayed in the header',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Chat Assistant' },
      },
    },
    closeIcon: {
      description: 'Icon or text to display in the close button',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '×' },
      },
    },
    isOnline: {
      description: 'Whether the chat is online or offline',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    theme: {
      description: 'The theme mode for the header',
      control: { type: 'select' },
      options: ['light', 'dark', 'auto'] as ThemeMode[],
      table: {
        type: { summary: 'ThemeMode' },
        defaultValue: { summary: 'light' },
      },
    },
    primaryColor: {
      description: 'Primary color for theming (CSS color value)',
      control: { type: 'color' },
      table: {
        type: { summary: 'string' },
      },
    },
    onClose: {
      description: 'Callback function when close button is clicked',
      action: 'close clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '400px', 
        border: '1px solid #e0e0e0', 
        borderRadius: '8px 8px 0 0', 
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
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
    isOnline: true,
    theme: 'light',
    onClose: fn(),
  },
};

// Theme variations
export const LightTheme: Story = {
  args: {
    title: 'Customer Support',
    closeIcon: '×',
    isOnline: true,
    theme: 'light',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Light theme with default styling.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    title: 'Customer Support',
    closeIcon: '×',
    isOnline: true,
    theme: 'dark',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark theme for low-light environments.',
      },
    },
  },
};

export const AutoTheme: Story = {
  args: {
    title: 'Customer Support',
    closeIcon: '×',
    isOnline: true,
    theme: 'auto',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto theme that adapts to system preferences.',
      },
    },
  },
};

// Online/Offline status
export const OnlineStatus: Story = {
  args: {
    title: 'Live Support',
    closeIcon: '×',
    isOnline: true,
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header showing online status with green indicator.',
      },
    },
  },
};

export const OfflineStatus: Story = {
  args: {
    title: 'Support (Offline)',
    closeIcon: '×',
    isOnline: false,
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header showing offline status with red indicator.',
      },
    },
  },
};

// Primary color variations
export const WithPrimaryColor: Story = {
  args: {
    title: 'Branded Chat',
    closeIcon: '×',
    isOnline: true,
    primaryColor: '#6f33b7',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with custom primary color branding.',
      },
    },
  },
};

export const BlueTheme: Story = {
  args: {
    title: 'Tech Support',
    closeIcon: '×',
    isOnline: true,
    primaryColor: '#3b82f6',
    onClose: fn(),
  },
};

export const GreenTheme: Story = {
  args: {
    title: 'Sales Chat',
    closeIcon: '×',
    isOnline: true,
    primaryColor: '#10b981',
    onClose: fn(),
  },
};

export const RedTheme: Story = {
  args: {
    title: 'Emergency Support',
    closeIcon: '×',
    isOnline: true,
    primaryColor: '#ef4444',
    onClose: fn(),
  },
};

// Different titles
export const ShortTitle: Story = {
  args: {
    title: 'Help',
    closeIcon: '×',
    isOnline: true,
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a short title.',
      },
    },
  },
};

export const LongTitle: Story = {
  args: {
    title: 'AI-Powered Customer Support Assistant',
    closeIcon: '×',
    isOnline: true,
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a long title to test text overflow handling.',
      },
    },
  },
};

export const EmojiTitle: Story = {
  args: {
    title: '🤖 AI Assistant',
    closeIcon: '×',
    isOnline: true,
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with emojis in the title.',
      },
    },
  },
};

// Different close icons
export const StandardClose: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '×',
    isOnline: true,
    onClose: fn(),
  },
  name: 'Close Icon: ×',
};

export const EmojiClose: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '✕',
    isOnline: true,
    onClose: fn(),
  },
  name: 'Close Icon: ✕',
};

export const ArrowClose: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '←',
    isOnline: true,
    onClose: fn(),
  },
  name: 'Close Icon: Arrow',
};

export const TextClose: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: 'Close',
    isOnline: true,
    onClose: fn(),
  },
  name: 'Close Icon: Text',
};

export const MinimizeIcon: Story = {
  args: {
    title: 'Chat Assistant',
    closeIcon: '−',
    isOnline: true,
    onClose: fn(),
  },
  name: 'Close Icon: Minimize',
};

// Real-world scenarios
export const SupportChat: Story = {
  args: {
    title: '🎧 Live Support',
    closeIcon: '×',
    isOnline: true,
    primaryColor: '#3b82f6',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'A customer support chat scenario.',
      },
    },
  },
};

export const SalesChat: Story = {
  args: {
    title: '💼 Sales Assistant',
    closeIcon: '×',
    isOnline: true,
    primaryColor: '#10b981',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'A sales assistance chat scenario.',
      },
    },
  },
};

export const TechnicalSupport: Story = {
  args: {
    title: '🔧 Technical Support',
    closeIcon: '×',
    isOnline: false,
    primaryColor: '#f59e0b',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'A technical support chat that is currently offline.',
      },
    },
  },
};

export const MaintenanceMode: Story = {
  args: {
    title: '⚠️ Maintenance Mode',
    closeIcon: '×',
    isOnline: false,
    primaryColor: '#ef4444',
    theme: 'dark',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat header during maintenance with warning styling.',
      },
    },
  },
};

// Accessibility and interaction tests
export const AccessibilityTest: Story = {
  args: {
    title: 'Accessibility Test',
    closeIcon: '×',
    isOnline: true,
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the accessibility features: proper ARIA labels and keyboard navigation.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Focus the close button to show keyboard accessibility
    const closeButton = canvasElement.querySelector('.chat-close-button');
    if (closeButton) {
      (closeButton as HTMLElement).focus();
    }
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    title: 'Interactive Demo',
    closeIcon: '×',
    isOnline: true,
    primaryColor: '#6f33b7',
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive header demonstrating hover states and click functionality.',
      },
    },
  },
};

// Combined theme showcase
export const ThemeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ChatHeader
        title="Light Theme"
        closeIcon="×"
        isOnline={true}
        theme="light"
        onClose={fn()}
      />
      <ChatHeader
        title="Dark Theme"
        closeIcon="×"
        isOnline={true}
        theme="dark"
        onClose={fn()}
      />
      <ChatHeader
        title="Auto Theme"
        closeIcon="×"
        isOnline={true}
        theme="auto"
        onClose={fn()}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available themes side by side.',
      },
    },
  },
};

// Status showcase
export const StatusShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ChatHeader
        title="Online Support"
        closeIcon="×"
        isOnline={true}
        primaryColor="#10b981"
        onClose={fn()}
      />
      <ChatHeader
        title="Offline Support"
        closeIcon="×"
        isOnline={false}
        primaryColor="#ef4444"
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