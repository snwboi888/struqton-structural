import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ messages, onSendMessage, isLoading, suggestedQuestions, onClearChat }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleSuggestedQuestion = (question) => {
    onSendMessage(question);
  };
  
  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Struqton AI Assistant</h3>
      </div>
      
      <div className="chat-messages">
        <div className="welcome-message">
          <div className="chat-message bot-message welcome-container">
            <p>Hello! How can I help you today?</p>
          </div>
          {messages.length === 0 && (
            <div className="suggested-questions-container">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggested-question-button"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message}
            onSuggestedQuestionClick={handleSuggestedQuestion}
          />
        ))}
        
        {isLoading && (
          <div className="chat-message bot-message">
            <div className="typing-animation">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input-container">
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <button 
            className="clear-chat-button" 
            type="button"
            onClick={onClearChat}
            aria-label="Clear chat history"
            disabled={messages.length === 0}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
            </svg>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={isLoading}
            aria-label="Message input"
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isUser: PropTypes.bool.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  suggestedQuestions: PropTypes.arrayOf(PropTypes.string),
  onClearChat: PropTypes.func.isRequired
};

ChatWindow.defaultProps = {
  suggestedQuestions: []
};

export default ChatWindow; 