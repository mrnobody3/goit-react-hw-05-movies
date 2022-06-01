import { useState, useEffect } from 'react';

import { fetchMovies } from '../../services/moviesApi';

import FilmsList from '../../components/FilmsList';
import s from './homePage.module.css';

const HomePage = () => {
  const [films, setFilms] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setFilms({ ...films, loading: true, error: null });

      try {
        const { results } = await fetchMovies();
        setFilms(prevState => ({
          ...prevState,
          items: [...results],
          loading: false,
          error: null,
        }));
      } catch (error) {
        setFilms({ ...films, loading: false, error: error.message });
      }
    };
    fetchTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { items, loading, error } = films;

  return (
    <div className={s.trending}>
      <h2 className={s.title}>Trending today</h2>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {Boolean(items.length) && <FilmsList items={items} />}
    </div>
  );
};

export default HomePage;
