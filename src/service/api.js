const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const TRIVIA_URL = 'https://opentdb.com/api.php?amount=5&encode=url3986&token=';

const getToken = () =>
  fetch(TOKEN_URL).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

const getTrivia = () =>
  fetch(`${TRIVIA_URL}`).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export { getToken, getTrivia };
