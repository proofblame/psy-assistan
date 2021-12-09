import SayNo from '../../images/SayNo.svg';
import Calm from '../../images/Calm.svg';
import Favourite from '../../images/Favourite.svg';
import Energy from '../../images/Energy.svg';
import Relations from '../../images/Relations.svg';
import SelfEstimation from '../../images/SelfEstimation.svg';

import style from './Reasons.module.scss';

import H2 from '../../UI/H2/H2';
import Li from '../../UI/UL/Li/Li';
import UL from '../../UI/UL/UL';
import IMG from '../../UI/IMG/IMG';
import Container from '../../UI/Container/Container';

const Reasons = () => {
  return (
    <section className='reasons'>
      <Container>
        <H2 className='header'>
          Регулярные сессии с психологом повышают качество жизни
        </H2>
        <UL className='list__speaking'>
          <Li>
            {
              <IMG
                src={SayNo}
                alt='Мужчина с кистью'
                className={style.img}
              ></IMG>
            }
            <p>Научиться говорить «Нет» и отстаивать свои границы</p>
          </Li>
          <Li>
            {
              <IMG
                src={Calm}
                alt='Мужчина медитирует'
                className={style.img}
              ></IMG>
            }
            <p>Справиться с тревогой и почувствовать спокойствие</p>
          </Li>
          <Li>
            {
              <IMG
                src={Favourite}
                alt='Девушка с мячом'
                className={style.img}
              ></IMG>
            }
            <p>Найти свое призвание и начать заниматься любимым делом</p>
          </Li>
          <Li>
            {
              <IMG
                src={SelfEstimation}
                alt='Женщина'
                className={style.img}
              ></IMG>
            }
            <p>Принять себя и повысить свою самооценку</p>
          </Li>
          <Li>
            {<IMG src={Energy} alt='Заряд энергии' className={style.img}></IMG>}
            <p>Получить заряд энергии и перестать прокрастинировать</p>
          </Li>
          <Li>
            {<IMG src={Relations} alt='Пара' className={style.img}></IMG>}
            <p>Наладить гармоничные отношения с близкими людьми</p>
          </Li>
        </UL>
      </Container>
    </section>
  );
};

export default Reasons;
