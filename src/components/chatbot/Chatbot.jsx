import React, { useState, useEffect, useCallback } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatWindow from './ChatWindow';
import { sendMessage, formatChatHistory } from '../../services/chatbotService';
import '../../styles/chatbot.css';

const DEFAULT_QUESTIONS = [
  "What services does Struqton offer?",
  "Where is Struqton located?",
  "How can I contact Struqton?"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState(DEFAULT_QUESTIONS);

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error('Error parsing saved chat history:', error);
        localStorage.removeItem('chatHistory');
      }
    }
  }, []);

  // Save chat history to localStorage when messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  const toggleChat = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  const handleSendMessage = useCallback(async (text) => {
    // Add the user message to state
    const userMessage = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Send the message to the API and get response
      const response = await sendMessage(
        text, 
        formatChatHistory(messages)
      );
      
      // Add the bot's response to state
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        isUser: false,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Update suggested questions
      if (response.suggestedQuestions) {
        setSuggestedQuestions(response.suggestedQuestions);
      }
    } catch (error) {
      // Add error message if API call fails
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setSuggestedQuestions(DEFAULT_QUESTIONS);
    localStorage.removeItem('chatHistory');
  }, []);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          suggestedQuestions={suggestedQuestions}
          onClearChat={clearChat}
        />
      )}
      <ChatbotButton isOpen={isOpen} toggleChat={toggleChat} />
    </div>
  );
};

export default Chatbot; 