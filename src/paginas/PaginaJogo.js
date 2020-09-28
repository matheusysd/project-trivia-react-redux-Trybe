import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Perfil from '../componentes/Perfil';
import Botao from '../componentes/Botao';
import Pergunta from '../componentes/Jogo/Pergunta';
import Respostas from '../componentes/Jogo/Resposta';
import { fetchToken, fetchTrivia } from '../redux/actions/apiActions';
import { correctAnswer } from '../redux/actions/userAction';

class PaginaJogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      index: 0,
      click: false,
      renderLink: false,
    };
    this.incrementQuestionIndex = this.incrementQuestionIndex.bind(this);
    this.clickouNoBotao = this.clickouNoBotao.bind(this);
    this.playTimer = this.playTimer.bind(this);
  }

  componentDidMount() {
    const { getToken, getTrivia } = this.props;
    getToken();
    getTrivia();
    this.playTimer();
  }

  componentDidUpdate() {
    const { timer } = this.state;
    if (timer === 0) clearInterval(this.myInterval);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  playTimer() {
    this.myInterval = setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - 1,
      }));
    }, 1000);
  }

  clickouNoBotao(answer, difficulty) {
    const { addScore } = this.props;
    this.setState({ click: true });
    const { timer } = this.state;
    if (answer === true && difficulty === 'easy') addScore(10 + timer * 1);
    if (answer === true && difficulty === 'medium') addScore(10 + timer * 2);
    if (answer === true && difficulty === 'hard') addScore(10 + timer * 3);
  }

  incrementQuestionIndex() {
    clearInterval(this.myInterval);
    const { index } = this.state;
    this.setState({ index: index + 1, click: false, timer: 30 });
    if (index === 3) this.setState({ renderLink: true });
    this.playTimer();
  }

  render() {
    const { questions } = this.props;
    const { index, click, renderLink, timer } = this.state;
    if (!questions[index]) return <div>Loading...</div>;
    return (
      <>
        <Perfil />
        <div className="container">
          <div>TEMPO: {timer}</div>
          <Pergunta currQuestion={questions[index]} />
          <div className="container">
            <Respostas
              correctAnswer={questions[index].correct_answer}
              incorrectAnswers={questions[index].incorrect_answers}
              condition={click || timer === 0}
              onClick={this.clickouNoBotao}
              difficulty={questions[index].difficulty}
            />
            <Botao
              nameClass="btn btn-lg btn-success btn-block"
              show={click || timer === 0}
              texto="PRÓXIMA"
              onClick={this.incrementQuestionIndex}
              dataTestId="btn-next"
              renderLink={renderLink}
            />
          </div>
        </div>
      </>
    );
  }
}

PaginaJogo.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      type: PropTypes.string,
      difficulty: PropTypes.string,
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answer: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  getToken: PropTypes.func.isRequired,
  getTrivia: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.dataReducer.trivia,
});

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  getTrivia: () => dispatch(fetchTrivia()),
  addScore: (score) => dispatch(correctAnswer(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginaJogo);
