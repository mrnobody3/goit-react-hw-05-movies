import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './moviesSearchForm.module.css';

const MoviesSearchForm = ({ getQuery }) => {
  const [state, setState] = useState({
    q: '',
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    getQuery(state.q);
    setState({ q: '' });
  };

  return (
    <form className={s.form} action="" onSubmit={handleSubmit}>
      <input
        value={state.q}
        name="q"
        onChange={handleChange}
        type="text"
        className={s.input}
      />
      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
};
export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
