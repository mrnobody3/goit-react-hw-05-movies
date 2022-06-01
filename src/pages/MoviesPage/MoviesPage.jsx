import MoviesSearch from '../../components/MoviesSearch';

import s from './moviesPage.module.css';

const MoviesPage = () => {
  return (
    <div className={s.search}>
      <MoviesSearch />
    </div>
  );
};

export default MoviesPage;
