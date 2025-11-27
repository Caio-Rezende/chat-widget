const MESSAGE_HISTORY_KEY = 'chat_message_history';
const MAX_MESSAGES_PER_USER = 100; // prevent localStorage bloat

export const saveMessageHistory = (userId: string, messages: any[]) => {
  try {
    const allHistory = JSON.parse(localStorage.getItem(MESSAGE_HISTORY_KEY) || '{}');
    
    // Filter out welcome messages from history to avoid duplicates
    const filteredMessages = messages.filter(msg => !msg.id.startsWith('welcome-'));
    
    // Limit the number of messages stored
    const limitedMessages = filteredMessages.slice(-MAX_MESSAGES_PER_USER);
    
    allHistory[userId] = {
      messages: limitedMessages,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(MESSAGE_HISTORY_KEY, JSON.stringify(allHistory));
  } catch (error) {
    console.error('Error saving message history:', error);
  }
};

export const getMessageHistory = (userId: string) => {
  try {
    const allHistory = JSON.parse(localStorage.getItem(MESSAGE_HISTORY_KEY) || '{}');
    const userHistory = allHistory[userId];
    
    if (!userHistory) return [];
    
    // Check if history is older than 30 days
    const lastUpdated = new Date(userHistory.lastUpdated);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    if (lastUpdated < thirtyDaysAgo) {
      // Clear old history
      clearMessageHistory(userId);
      return [];
    }
    
    return userHistory.messages || [];
  } catch (error) {
    console.error('Error loading message history:', error);
    return [];
  }
};

export const clearMessageHistory = (userId: string) => {
  try {
    const allHistory = JSON.parse(localStorage.getItem(MESSAGE_HISTORY_KEY) || '{}');
    delete allHistory[userId];
    localStorage.setItem(MESSAGE_HISTORY_KEY, JSON.stringify(allHistory));
  } catch (error) {
    console.error('Error clearing message history:', error);
  }
};