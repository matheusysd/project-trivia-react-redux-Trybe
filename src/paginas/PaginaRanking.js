import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../componentes/Botao';

const PaginaRanking = () => (
  <div className="container">
    <h1 data-testid="ranking-title">Ranking:</h1>
    <div className="container">
      <Link to="/">
        <Botao
          texto="Jogar"
          dataTestId="btn-go-home"
          nameClass="btn btn-lg btn-success btn-block"
        />
      </Link>
    </div>
  </div>
);

export default PaginaRanking;
