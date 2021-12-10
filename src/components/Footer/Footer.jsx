import footer from './Footer.module.scss';
import H3 from '../../UI/H3/H3';
import UL from '../../UI/UL/UL';
import Li from '../../UI/UL/Li/Li';
import IMG from '../../UI/IMG/IMG';
import Facebook from '../Footer/images/Facebook.svg';
import Telegram from '../Footer/images/Telegram.svg';
import Whatsup from '../Footer/images/Whatsup.svg';

const Footer = () => {
  return (
    <section className={footer.footer}>
      <div className={footer.container}>
        <div className={footer.socialContainer}>
          <H3 className={footer.footerHeader}>
            Если есть вопросы - пишите нам{' '}
          </H3>
          <p className={footer.subheader}>Мы будем рады ответить на них!</p>
          <nav className={footer.social}>
            <UL className={footer.socialNavList}>
              <Li className={footer.socialNavItem}>
                <a href='https://www.facebook.com/'>
                  <IMG
                    src={Facebook}
                    alt={'facebook'}
                    className={footer.image}
                  ></IMG>
                </a>
              </Li>
              <Li className={footer.socialNavItem}>
                <a href='https://web.telegram.org/'>
                  <IMG
                    src={Telegram}
                    alt={'telegram'}
                    className={footer.image}
                  ></IMG>
                </a>
              </Li>
              <Li className={footer.socialNavItem}>
                <a href='https://www.whatsapp.com/'>
                  <IMG
                    src={Whatsup}
                    alt={"whats'up"}
                    className={footer.image}
                  ></IMG>
                </a>
              </Li>
            </UL>
          </nav>
        </div>
        <nav className={footer.footerList}>
          <UL>
            <Li className={footer.navItem}>
              <a href='#' className={footer.navItemLink}>
                Вопросы-ответы
              </a>
            </Li>
            <Li className={footer.navItem}>
              <a href='#' className={footer.navItemLink}>
                Контакты
              </a>
            </Li>
            <Li className={footer.navItem}>
              <a href='#' className={footer.navItemLink}>
                Работа в Psy-assistant
              </a>
            </Li>
            <Li className={footer.navItem}>
              <a href='#' className={footer.navItemLink}>
                Блог
              </a>
            </Li>
            <Li className={footer.navItem}>
              <a href='#' className={footer.navItemLink}>
                Psy-assistant для бизнеса
              </a>
            </Li>
            <Li className={footer.navItem}>
              <a href='#' className={footer.navItemLink}>
                Проверка совместимости
              </a>
            </Li>
          </UL>
        </nav>
        <div className={footer.feedback}>
          <p className={footer.text}>
            Регистрация на сайте означает согласие{' '}
            <a href='#' className={footer.textLink}>
              с пользовательским соглашением.
            </a>{' '}
            Политика в отношении обработки и защиты персональных данных.
          </p>
          <div className={footer.like}>
            <div className={footer.likeContainer}>
              <p className={footer.likeText}>Нравится!</p>
              <p className={footer.likeCounter}>35 тыс.</p>
            </div>
            <button className={footer.likeButton}>Поделиться</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
