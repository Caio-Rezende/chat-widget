import type { Meta, StoryObj } from '@storybook/react';
import { LoadingIndicator } from '../components/LoadingIndicator';

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A loading indicator component that displays animated dots to show the assistant is typing or processing a response.',
      },
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

// Default loading indicator
export const Default: Story = {};

// In conversation context
export const InConversationContext: Story = {
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
        <div className="message-bubble message-bubble--user">
          <div>Hello! Can you help me with something?</div>
          <div className="message-timestamp">2:30 PM</div>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Multiple loading indicators (edge case)
export const MultipleIndicators: Story = {
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
        <Story />
        <Story />
      </div>
    ),
  ],
};

// In a narrow container
export const NarrowContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{
        width: '250px',
        padding: '12px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <Story />
      </div>
    ),
  ],
};

// In a wide container
export const WideContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{
        width: '600px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <Story />
      </div>
    ),
  ],
};

// Dark theme simulation
export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <div style={{
        width: '400px',
        padding: '16px',
        backgroundColor: '#2c2c2c',
        borderRadius: '8px',
        color: 'white'
      }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Loading indicator displayed in a dark theme context.',
      },
    },
  },
};

// Full conversation with loading
export const FullConversationWithLoading: Story = {
  decorators: [
    (Story) => (
      <div style={{
        width: '400px',
        height: '300px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        overflow: 'auto'
      }}>
        <div className="message-bubble message-bubble--system">
          <div>Welcome! How can I help you today?</div>
          <div className="message-timestamp">2:25 PM</div>
        </div>
        <div className="message-bubble message-bubble--user">
          <div>I need help with my account settings.</div>
          <div className="message-timestamp">2:28 PM</div>
        </div>
        <div className="message-bubble message-bubble--assistant">
          <div>I'd be happy to help you with your account settings. Let me check what options are available for you.</div>
          <div className="message-timestamp">2:28 PM</div>
        </div>
        <div className="message-bubble message-bubble--user">
          <div>Great! I specifically need to update my email address.</div>
          <div className="message-timestamp">2:30 PM</div>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Loading indicator shown in the context of a full conversation, demonstrating how it appears while the assistant is processing a response.',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story is for testing accessibility features like screen reader announcements and proper ARIA attributes.',
      },
    },
  },
};

// Animation showcase
export const AnimationShowcase: Story = {
  decorators: [
    (Story) => (
      <div style={{
        width: '400px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h4 style={{ margin: '0 0 16px 0', color: '#666' }}>
          Loading Animation Demo
        </h4>
        <Story />
        <p style={{ 
          margin: '16px 0 0 0', 
          fontSize: '14px', 
          color: '#888',
          fontStyle: 'italic'
        }}>
          The dots should animate continuously to indicate processing
        </p>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Focused view of the loading animation to showcase the dot animation behavior.',
      },
    },
  },
};