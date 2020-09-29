const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const CATEGORIES_URL = 'https://opentdb.com/api_category.php';

const getCategories = () =>
  fetch(CATEGORIES_URL).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

const getToken = () =>
  fetch(TOKEN_URL).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

const getTrivia = (category, difficulty, type) =>
  fetch(
    `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=${type}&encode=url3986&token=`,
  ).then((res) =>
    res.json().then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export { getToken, getTrivia, getCategories };
