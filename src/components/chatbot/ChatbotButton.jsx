import React from 'react';
import PropTypes from 'prop-types';

const ChatbotButton = ({ isOpen, toggleChat }) => {
  return (
    <button
      onClick={toggleChat}
      className={`chatbot-button ${isOpen ? 'open' : ''}`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
      title={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
};

ChatbotButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleChat: PropTypes.func.isRequired,
};

export default ChatbotButton; 