import SayNo from './images/SayNo.svg';
import Calm from './images/Calm.svg';
import Favourite from './images/Favourite.svg';
import Energy from './images/Energy.svg';
import Relations from './images/Relations.svg';
import SelfEstimation from './images/SelfEstimation.svg';

import reasons from './Reasons.module.scss';

import H2 from '../../../UI/H2/H2';
import Li from '../../../UI/UL/Li/Li';
import UL from '../../../UI/UL/UL';
import IMG from '../../../UI/IMG/IMG';
import Button from '../../../UI/Button/Button';
import Wrap from '../../../UI/Wrap/Wrap';

const Reasons = () => {
  return (
    <section className={reasons.reasons}>
      <Wrap>
        <H2 className={reasons.header}>
          Регулярные сессии с психологом повышают качество жизни
        </H2>
        <div className={reasons.wrapper}>
          <UL className={reasons.list}>
            <Li className={reasons.item}>
              {
                <IMG
                  src={SayNo}
                  alt='Мужчина с кистью'
                  className={reasons.sayNo}
                ></IMG>
              }
              <p className={reasons.text}>
                Научиться говорить «Нет» и отстаивать свои границы
              </p>
            </Li>
            <Li className={reasons.item}>
              {
                <IMG
                  src={Calm}
                  alt='Мужчина медитирует'
                  className={reasons.calm}
                ></IMG>
              }
              <p className={reasons.text}>
                Справиться с тревогой и почувствовать спокойствие
              </p>
            </Li>
            <Li className={reasons.item}>
              {
                <IMG
                  src={Favourite}
                  alt='Девушка с мячом'
                  className={reasons.favourite}
                ></IMG>
              }
              <p className={reasons.text}>
                Найти свое призвание и начать заниматься любимым делом
              </p>
            </Li>
            <Li className={reasons.item}>
              {
                <IMG
                  src={SelfEstimation}
                  alt='Женщина'
                  className={reasons.selfEstimation}
                ></IMG>
              }
              <p className={reasons.text}>
                Принять себя и повысить свою самооценку
              </p>
            </Li>
            <Li className={reasons.item}>
              {
                <IMG
                  src={Energy}
                  alt='Заряд энергии'
                  className={reasons.energy}
                ></IMG>
              }
              <p className={reasons.text}>
                Получить заряд энергии и перестать прокрастинировать
              </p>
            </Li>
            <Li className={reasons.item}>
              {
                <IMG
                  src={Relations}
                  alt='Пара'
                  className={reasons.relations}
                ></IMG>
              }
              <p className={reasons.text}>
                Наладить гармоничные отношения с близкими людьми
              </p>
            </Li>
          </UL>
        </div>
        <p className={reasons.improve}>Измени жизнь к лучшему!</p>
        <div className={reasons.buttonWrapper}>
          <Button className='dark'>Хочу обсудить свою ситуацию</Button>
        </div>
      </Wrap>
    </section>
  );
};

export default Reasons;
