import {
  REQUEST_TOKEN,
  RECEIVE_TOKEN,
  REQUEST_TRIVIA,
  RECEIVE_TRIVIA,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES, SELECT_CATEGORY, SELECT_DIFFICULTY, SELECT_TYPE
} from '../actions/apiActions';
import addInfo from '../../util/localStorage';

const INITIAL_STATE = {
  isFetching: false,
  token: {},
  trivia: {},
  categories: [{ id: '', name: 'Any Category' }],
  selectedCategory: '',
  selectedType: '',
  selectedDifficulty: '',
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TOKEN:
      addInfo('token', action.token);
      return {
        ...state,
        token: action.token,
        isFetching: false,
      };
    case REQUEST_TRIVIA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TRIVIA:
      return {
        ...state,
        isFetching: false,
        trivia: action.trivia,
      };
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        categories: [...state.categories, ...action.categories.trivia_categories],
      };
    case SELECT_CATEGORY:
      return{...state, selectedCategory: action.category};
    case SELECT_DIFFICULTY:
      return{...state, selectedDifficulty: action.difficulty};
    case SELECT_TYPE:
      return{...state, selectedType: action.typeQ};
    default:
      return state;
  }
};

export default dataReducer;
