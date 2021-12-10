import { useState } from 'react';
import Logo from '../../Header/images/Logo.svg';
import IMG from '../../../UI/IMG/IMG';
import navbar from './Navbar.module.scss';

const Navbar = ({ isOpened, handleOpen }) => {
  return (
    <section
      className={`${navbar.navbar} ${
        isOpened ? `${navbar.navbarIsOpened}` : `${navbar.navbarIsClosed}`
      }`}
    >
      <div className={navbar.container}>
        <div className={navbar.logoContainer}>
          <IMG src={Logo} alt='логотип' className={navbar.logo}></IMG>
          <p className={navbar.logoText}>Psy-assistant</p>
        </div>
        <button
          type='button'
          onClick={handleOpen}
          className={navbar.navbarClose}
        ></button>
      </div>
      <nav className={navbar.navbarList}>
        <a href='#' className={navbar.psyco}>
          Для психологов
        </a>
        <a href='#' className={navbar.entrance}>
          Вход
        </a>
        <button href='#' className={navbar.button}>
          Выбрать специалиста
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
