import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Perfil = ({ nome, imagem, pontos }) => (
  <div className="navbar navbar-light fixed-top profile row">
    <div className="col">
      <img
        src={`https://www.gravatar.com/avatar/${imagem}`}
        alt="avatar do jogador"
        width="72"
        data-testid="header-profile-picture"
      />
    </div>
    <div className="col-6">
      <span data-testid="header-player-name">{nome} </span>
    </div>
    <div className="col">
      <span data-testid="header-score">Pontos: {pontos} </span>
    </div>
  </div>
);

Perfil.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  pontos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  nome: state.userReducer.name,
  imagem: state.userReducer.gravatarEmail,
  pontos: state.userReducer.score,
});

export default connect(mapStateToProps)(Perfil);
