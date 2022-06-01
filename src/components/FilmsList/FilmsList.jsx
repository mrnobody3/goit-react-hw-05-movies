import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './filmList.module.css';

const FilmsList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, original_title, name }) => {
    return (
      <li key={id} className={s.item}>
        <Link
          state={{ from: location }}
          to={`/movies/${id}`}
          className={s.link}
        >
          {original_title || name}
        </Link>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
};

export default FilmsList;

FilmsList.propsDefault = {
  items: [],
};

FilmsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};
