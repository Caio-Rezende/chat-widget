# Embeddable Chat Widget

A modern, embeddable React chat widget with ChatGPT integration. Perfect for adding AI-powered customer support, sales assistance, or general chat functionality to your web applications.

## 🚀 Installation

```bash
npm install caios-embeddable-chat-widget
```

## 📖 Quick Start

```javascript
import React from "react";
import { ChatWidget } from "caios-embeddable-chat-widget";

function App() {
    return (
        <div>
            {/* Your app content */}

            <ChatWidget
                apiKey="your-openai-api-key"
                theme="light"
                position="bottom-right"
                title="Chat Assistant"
                welcomeMessage="Hello! How can I help you today?"
            />
        </div>
    );
}
```

## ✨ Features

-   🚀 **Easy Integration** - Drop-in React component
-   🎨 **Customizable Themes** - Light, dark, and auto themes
-   💬 **Real-time Chat** - Powered by OpenAI ChatGPT
-   📱 **Responsive Design** - Works on desktop and mobile
-   ⚡ **TypeScript Support** - Full type definitions included
-   🎯 **Flexible Positioning** - Four corner positions available
-   🔧 **Event Callbacks** - Handle messages and errors
-   📝 **Markdown Support** - Rich text formatting
-   ⏰ **Timestamps** - Optional message timestamps
-   🟢 **Status Indicators** - Online/offline status
-   💾 **Local Storage** - Persistent chat history per user ID
-   🎪 **Storybook Ready** - Component documentation included

## 🔧 Configuration

### Basic Props

| Prop             | Type                                                           | Default                              | Description         |
| ---------------- | -------------------------------------------------------------- | ------------------------------------ | ------------------- |
| `apiKey`         | `string`                                                       | **Required**                         | Your OpenAI API key |
| `theme`          | `'light' \| 'dark' \| 'auto'`                                  | `'light'`                            | Theme mode          |
| `position`       | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'`                     | Widget position     |
| `title`          | `string`                                                       | `'Chat Assistant'`                   | Chat window title   |
| `welcomeMessage` | `string`                                                       | `'Hello! How can I help you today?'` | Initial message     |
| `placeholder`    | `string`                                                       | `'Type your message...'`             | Input placeholder   |

### Appearance Props

| Prop           | Type     | Default     | Description                      |
| -------------- | -------- | ----------- | -------------------------------- |
| `primaryColor` | `string` | `undefined` | Custom primary color (CSS color) |
| `buttonIcon`   | `string` | `'💬'`      | Chat toggle button icon          |
| `closeIcon`    | `string` | `'×'`       | Close button icon                |
| `sendIcon`     | `string` | `'→'`       | Send button icon                 |
| `width`        | `number` | `350`       | Chat window width (px)           |
| `height`       | `number` | `500`       | Chat window height (px)          |
| `maxHeight`    | `number` | `600`       | Maximum height (px)              |

### Feature Props

| Prop            | Type      | Default | Description                |
| --------------- | --------- | ------- | -------------------------- |
| `allowMarkdown` | `boolean` | `false` | Enable markdown rendering  |
| `showTimestamp` | `boolean` | `false` | Show message timestamps    |
| `disabled`      | `boolean` | `false` | Disable chat input         |
| `isOnline`      | `boolean` | `true`  | Online status indicator    |
| `userId`        | `string`  | ``.     | User Id to isolate storage |

### Event Props

| Prop                | Type                        | Description                      |
| ------------------- | --------------------------- | -------------------------------- |
| `onMessageSent`     | `(message: string) => void` | Called when user sends a message |
| `onMessageReceived` | `(message: string) => void` | Called when AI responds          |
| `onError`           | `(error: string) => void`   | Called when an error occurs      |
| `onToggle`          | `(isOpen: boolean) => void` | Called when chat opens/closes    |

## 🎨 Examples

### Customer Support

```javascript
<ChatWidget
    apiKey="your-api-key"
    title="🎧 Customer Support"
    welcomeMessage="Hi! I'm here to help with any questions about our products."
    primaryColor="#3b82f6"
    allowMarkdown={true}
    showTimestamp={true}
    placeholder="Describe your issue..."
    onMessageSent={(msg) => console.log("Customer asked:", msg)}
    onError={(err) => console.error("Support error:", err)}
/>
```

### Sales Assistant

```javascript
<ChatWidget
    apiKey="your-api-key"
    title="💼 Sales Assistant"
    welcomeMessage="Welcome! I'm here to help you find the perfect solution."
    primaryColor="#10b981"
    position="bottom-left"
    placeholder="Tell me about your needs..."
/>
```

### Dark Theme

```javascript
<ChatWidget
    apiKey="your-api-key"
    theme="dark"
    title="🤖 AI Assistant"
    primaryColor="#6f33b7"
    allowMarkdown={true}
    buttonIcon="🤖"
    sendIcon="🚀"
/>
```

### Compact Size

```javascript
<ChatWidget
    apiKey="your-api-key"
    width={280}
    height={350}
    title="Compact Chat"
    position="top-right"
/>
```

## 🔑 Getting Your OpenAI API Key

1. Visit [OpenAI's website](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to the API section
4. Generate a new API key
5. Copy and use it in the `apiKey` prop

⚠️ **Security Note**: Never expose your API key in client-side code in production. Consider using a backend proxy to handle API requests.

## 🎪 Development & Storybook

The widget includes comprehensive Storybook documentation for development and testing:

```bash
# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 📦 What's Included

-   `ChatWidget` - Main widget component
-   `ChatWindow` - Standalone chat window
-   `useChat` - Chat hook for custom implementations
-   Full TypeScript definitions
-   CSS styles (automatically imported)
-   Storybook documentation

## 🤝 TypeScript Support

Full TypeScript support with exported types:

```typescript
import {
    ChatWidget,
    ChatWidgetProps,
    Message,
} from "caios-embeddable-chat-widget";

const MyChat: React.FC<{ apiKey: string }> = ({ apiKey }) => {
    const handleMessage = (message: string) => {
        console.log("New message:", message);
    };

    return (
        <ChatWidget
            apiKey={apiKey}
            onMessageSent={handleMessage}
            onMessageReceived={handleMessage}
        />
    );
};
```

## 🔧 Customization

### Custom Styling

The widget uses CSS custom properties for easy theming:

```css
.chat-widget {
    --chat-primary-color: #your-brand-color;
}
```

### Event Handling

```javascript
<ChatWidget
    apiKey="your-api-key"
    onMessageSent={(message) => {
        // Track user messages
        analytics.track("chat_message_sent", { message });
    }}
    onMessageReceived={(response) => {
        // Handle AI responses
        console.log("AI responded:", response);
    }}
    onError={(error) => {
        // Handle errors gracefully
        console.error("Chat error:", error);
        showNotification("Chat temporarily unavailable");
    }}
    onToggle={(isOpen) => {
        // Track widget usage
        analytics.track("chat_toggled", { isOpen });
    }}
/>
```

## 📄 License

MIT

## 🐛 Issues & Support

For issues, feature requests, or questions, please visit our [GitHub repository](https://github.com/your-repo/caios-embeddable-chat-widget).
