import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieById } from '../../services/moviesApi';

import s from './moviesDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({
    content: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie({ ...movie, loading: true, error: null });

      try {
        const data = await fetchMovieById(id);
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          content: data,
          error: null,
        }));
      } catch (error) {
        setMovie({ ...movie, loading: false, error: error.message });
      }
    };
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const goBack = () => navigate(from);

  const { content, loading, error } = movie;
  const { poster_path, genres, title, overview, vote_average } = content;

  return (
    <>
      <button className={s.btn} onClick={goBack}>
        Go back
      </button>
      {loading && <p>Loading...</p>}
      {error && (
        <>
          <p>We are so sorry...Problems with server</p>
          <p>{error}</p>
        </>
      )}
      {Object.keys(content).length !== 0 && (
        <div className={s.container}>
          <div className={s.details}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="title"
            />
            <div>
              <h2 className={s.title}>{title}</h2>
              <p className={s.score}>User score: {vote_average}</p>
              <h3 className={s.subtitle}>Overview</h3>
              <p className={s.overview}>{overview}</p>
              <h3 className={s.subtitle}>Genres:</h3>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </div>
          <div className={s.addinfo}>
            <h2 className={s.title}>Additional information</h2>
            <ul>
              <li className={s.item}>
                <Link
                  state={{ from }}
                  className={s.link}
                  to={`/movies/${id}/cast`}
                >
                  Cast
                </Link>
              </li>
              <li className={s.item}>
                <Link
                  state={{ from }}
                  className={s.link}
                  to={`/movies/${id}/reviews`}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
