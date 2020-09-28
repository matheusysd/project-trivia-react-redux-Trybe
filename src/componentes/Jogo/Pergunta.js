import React from 'react';
import PropTypes from 'prop-types';

const Pergunta = (props) => {
  if (!props.currQuestion) return <div>Loading...</div>;
  const { currQuestion } = props;
  const { category, question } = currQuestion;
  const decodedQuestion = decodeURIComponent(question);
  const decodedCategory = decodeURIComponent(category);
  return (
    <div className="container">
      <div data-testid="question-category">Categoria: {decodedCategory}</div>
      <div data-testid="question-text">{decodedQuestion}</div>
    </div>
  );
};

Pergunta.propTypes = {
  currQuestion: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default Pergunta;
