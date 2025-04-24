import React from 'react';
import PropTypes from 'prop-types';

const SuggestedQuestions = ({ questions, onSelectQuestion }) => {
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <div className="suggested-questions">
      <p className="suggested-questions-title">You might want to ask:</p>
      <div className="suggested-questions-list">
        {questions.map((question, index) => (
          <button
            key={index}
            className="suggested-question-button"
            onClick={() => onSelectQuestion(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

SuggestedQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string),
  onSelectQuestion: PropTypes.func.isRequired
};

SuggestedQuestions.defaultProps = {
  questions: []
};

export default SuggestedQuestions; 