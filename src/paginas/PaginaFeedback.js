import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Perfil from '../componentes/Perfil';
import Botao from '../componentes/Botao';

const PaginaFeedback = ({ pontuacao, acertos }) => (
  <div className="container">
    <Perfil />
    <h1 data-testid="feedback-text">{acertos >= 3 ? 'Mandou bem!' : 'Não desanime! Tente novamente  !'}</h1>
    {acertos > 0 ? (
      <p data-testid="feedback-total-question">{`Você acertou ${acertos} ${
        acertos > 1 ? 'questões' : 'questão'
      }.`}</p>
    ) : (
      <p data-testid="feedback-total-question">Você não acertou nenhuma questão.</p>
    )}
    <p data-testid="feedback-total-score">{`Você fez ${pontuacao} pontos.`}</p>
    <Link to="/" className="text-link">
      <Botao
        texto="Jogar Novamente"
        dataTestId="btn-play-again"
        nameClass="btn btn-lg btn-success btn-block"
      />
    </Link>
    <Link to="/ranking" className="text-link">
      <Botao
        texto="Ver Ranking"
        dataTestId="btn-ranking"
        nameClass="btn btn-lg btn-secondary btn-block"
      />
    </Link>
  </div>
);

PaginaFeedback.propTypes = {
  pontuacao: PropTypes.number.isRequired,
  acertos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  pontuacao: state.userReducer.score,
  acertos: state.userReducer.assertions,
});

export default connect(mapStateToProps)(PaginaFeedback);
