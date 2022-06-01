import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsById } from '../../services/moviesApi';

import s from './reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    reviews: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchReviews = async () => {
      setState({ ...state, loading: true, error: null });

      try {
        const { results } = await fetchReviewsById(id);

        setState(prevState => ({
          ...prevState,
          loading: false,
          reviews: results,
          error: null,
        }));
      } catch (error) {
        setState({ ...state, loading: false, error: error.message });
      }
    };
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const { reviews, error } = state;
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id} className={s.item}>
      <p className={s.author}>Author: {author}</p>
      <p>{content}</p>
    </li>
  ));
  return (
    <>
      {error && (
        <>
          <p>We are so sorry...Problems with server</p>
          <p>{error}</p>
        </>
      )}
      {reviews.length && <ul className={s.list}>{elements}</ul>}
    </>
  );
};

export default Reviews;
