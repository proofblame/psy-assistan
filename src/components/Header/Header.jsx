import header from './Header.module.scss';
import Logo from './images/Logo.svg';
import IMG from '../../UI/IMG/IMG';
import Button from '../../UI/Button/Button';
import Container from '../../UI/Container/Container';

const Header = ({ isOpened, handleOpen }) => {
  return (
    <section className={header.header}>
      <Container>
        <div className={header.container}>


          <a href="#" className={header.logoContainer}>

            <IMG src={Logo} alt='логотип' className={header.logo}></IMG>
            <p className={header.logoText}>Psy-assistant</p>

          </a>

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
            className={`${header.burger} ${header.burger_animate_1} ${isOpened ? `` : `${header.burger_animate_2}`
              }`}
          >
            <span></span> <span></span> <span></span>
            {/* <span className={header.burgerItem}></span> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
