import Container from '../../../UI/Container/Container';
import navbar from './Navbar.module.scss';

const Navbar = ({ isOpened }) => {
  return (
    <section
      className={`${navbar.navbar} ${isOpened ? `${navbar.navbarIsOpened}` : `${navbar.navbarIsClosed}`
        }`}
    >
      <Container>
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
      </Container>
    </section>
  );
};

export default Navbar;
