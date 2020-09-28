import React from 'react';
import PropTypes from 'prop-types';

const Respostas = (props) => {
  const { correctAnswer, incorrectAnswers, condition, onClick, difficulty } = props;
  const decodedCorrect = decodeURIComponent(correctAnswer);
  return (
    <div>
      <button
        type="button"
        data-testid="correct-answer"
        style={condition ? { border: '3px solid rgb(6, 240, 15)' } : null}
        className="btn btn-lg btn-secondary btn-block"
        onClick={() => onClick(true, difficulty)}
        disabled={condition}
      >
        {decodedCorrect}
      </button>
      {incorrectAnswers.map((incorrectAnswer, index) => (
        <button
          type="button"
          key={incorrectAnswer}
          data-testid={`wrong-answer-${index}`}
          className="btn btn-lg btn-secondary btn-block"
          style={condition ? { border: '3px solid rgb(255, 0, 0)' } : null}
          onClick={() => onClick(false)}
          disabled={condition}
        >
          {decodeURIComponent(incorrectAnswer)}
        </button>
      ))}
    </div>
  );
};

Respostas.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
};
// comentário
export default Respostas;
