import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from '../../services/moviesApi';

import MoviesSearchForm from './MoviesSearchForm';
import FilmsList from '../FilmsList';

import s from './moviesSearch.module.css';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [films, setFilms] = useState({
    items: [],
    loading: false,
    error: null,
  });
  // const [query, setQuery] = useState('');

  const query = searchParams.get('query');

  useEffect(() => {
    try {
      const fetchMovie = async () => {
        if (!query) return;
        setFilms({ ...films, loading: true, error: null });

        const { results } = await fetchMovieByName(query);
        setFilms(prevState => ({
          ...prevState,
          items: results,
          loading: false,
          error: null,
        }));
      };
      fetchMovie();
    } catch (error) {
      setFilms({ ...films, loading: false, error: error.message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  const { items, loading, error } = films;

  const getQuery = query => {
    setSearchParams({ query });
  };

  return (
    <div className={s.search}>
      <MoviesSearchForm getQuery={getQuery} />
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <FilmsList items={items} />
    </div>
  );
};

export default MoviesSearch;
