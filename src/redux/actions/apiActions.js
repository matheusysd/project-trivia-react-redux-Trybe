import { getToken, getTrivia, getCategories } from '../../service/api';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const RECEIVE_TRIVIA = 'RECEIVE_TRIVIA';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const receiveToken = (token) => ({
  type: RECEIVE_TOKEN,
  token,
});

const requestTrivia = () => ({
  type: REQUEST_TRIVIA,
});

const receiveTrivia = (trivia) => ({
  type: RECEIVE_TRIVIA,
  trivia,
});

const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
});

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories());
    return getCategories().then((data) => dispatch(receiveCategories(data)));
  };
}

function fetchToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return getToken().then((data) => dispatch(receiveToken(data.token)));
  };
}

function fetchTrivia(category, difficulty, type) {
  return (dispatch) => {
    dispatch(requestTrivia());
    return getTrivia(category, difficulty, type).then((data) => dispatch(receiveTrivia(data.results)));
  };
}

export { fetchToken, fetchTrivia, fetchCategories };
