import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ message, onSuggestedQuestionClick }) => {
  const { text, isUser, timestamp, suggestedQuestions } = message;
  const formattedTime = new Date(timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  // Format text with bullet points and line breaks
  const formatText = (text) => {
    return text.split('\n').map((line, index) => {
      // Check if line starts with a dash or bullet point
      const isList = line.trim().startsWith('-') || line.trim().startsWith('•');
      if (isList) {
        return <li key={index}>{line.trim().substring(1).trim()}</li>;
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'bot-message'}`}>
      {!isUser && suggestedQuestions && suggestedQuestions.length > 0 && (
        <div className="suggested-questions-top">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              className="suggested-question-button"
              onClick={() => onSuggestedQuestionClick(question)}
            >
              {question}
            </button>
          ))}
        </div>
      )}
      <div className="message-content">
        {isUser ? (
          <p>{text}</p>
        ) : (
          <div className="bot-message-content">
            {formatText(text)}
          </div>
        )}
      </div>
      <div className="message-timestamp">
        <small>{formattedTime}</small>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
    timestamp: PropTypes.string.isRequired,
    suggestedQuestions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSuggestedQuestionClick: PropTypes.func.isRequired,
};

export default ChatMessage; 