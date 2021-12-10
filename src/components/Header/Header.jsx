import header from './Header.module.scss';
import Logo from './images/Logo.svg';
import IMG from '../../UI/IMG/IMG';
import Button from '../../UI/Button/Button';

const Header = ({ isOpened, handleOpen }) => {
  return (
    <section className={header.header}>
      <div className={header.logoContainer}>
        <IMG src={Logo} alt='логотип' className={header.logo}></IMG>
        <p className={header.logoText}>Psy-assistant</p>
      </div>
      <div className={header.buttonContainer}>
        <a href='#' className={header.psyco}>
          Для психологов
        </a>
        <a href='#' className={header.entrance}>
          Вход
        </a>
        <Button className='light'>Выбрать специалиста</Button>
      </div>
      <div
        onClick={handleOpen}
        className={`${header.burger} ${
          isOpened === true ? `${header.burger}` : ''
        }`}
      >
        <span className={header.burgerItem}></span>
      </div>
    </section>
  );
};

export default Header;
