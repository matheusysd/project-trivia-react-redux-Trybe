import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategory, selectDifficulty, selectType } from '../redux/actions/apiActions';

const PaginaConfiguracoes = ({ categories, getDifficulty, getCategory, getType }) => {
  return (
    <div className="container">
      <h1 data-testid="settings-title">Settings</h1>
      <div className="container">
        <select
          id="category"
          className="form-control"
          onChange={(e) => getCategory(e.target.value)}
        >
          {categories.map(({ name, id }) => (
            <option key={name} value={id}>
              {name}
            </option>
          ))}
        </select>
        <select className="form-control" onChange={(e) => getDifficulty(e.target.value)}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select className="form-control" onChange={(e) => getType(e.target.value)}>
          <option value="">Any Type</option>
          <option value="multiple">Multiple choice</option>
          <option value="boolean">True/False</option>
        </select>
        <Link to="/" className="text-decoration-none">
          <button className="btn btn-lg btn-success btn-block" type="button">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.dataReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: (value) => dispatch(selectCategory(value)),
  getDifficulty: (value) => dispatch(selectDifficulty(value)),
  getType: (value) => dispatch(selectType(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginaConfiguracoes);
