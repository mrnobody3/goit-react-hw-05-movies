import { NavLink } from 'react-router-dom';

import s from './headerMenu.module.css';

const HeaderMenu = () => {
  const getActiveLink = ({ isActive }) =>
    isActive ? `${s.link} ${s.active}` : s.link;
  return (
    <header className={s.header}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/" className={getActiveLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getActiveLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default HeaderMenu;
