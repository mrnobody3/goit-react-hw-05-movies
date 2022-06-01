import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastById } from '../../services/moviesApi';

import defaultAvatar from '../../images/default-avatar.png';
import s from './cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    cast: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovie = async () => {
      setState({ ...state, loading: true, error: null });

      try {
        const { cast } = await fetchCastById(id);

        setState(prevState => ({
          ...prevState,
          loading: false,
          cast: cast,
          error: null,
        }));
      } catch (error) {
        setState({ ...state, loading: false, error: error.message });
      }
    };
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { cast, error } = state;
  const elements = cast.map(({ id, profile_path, name, character }) => (
    <li key={id} className={s.item}>
      <img
        className={s.img}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultAvatar
        }
        alt={name}
      />
      <p className={s.name}>{name}</p>
      <p className={s.character}>Character: {character}</p>
    </li>
  ));
  return (
    <div className={s.cast}>
      {error && (
        <>
          <p>We are so sorry...Problems weth server</p>
          <p>{error}</p>
        </>
      )}
      {cast.length && <ul className={s.list}>{elements}</ul>}
    </div>
  );
};

export default Cast;
