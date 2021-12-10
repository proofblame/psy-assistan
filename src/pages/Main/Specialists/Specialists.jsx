import spec from './Specialists.module.scss';
import H2 from '../../../UI/H2/H2';
import H3 from '../../../UI/H3/H3';
import IMG from '../../../UI/IMG/IMG';
import UL from '../../../UI/UL/UL';
import Specialist from './images/Specialist.svg';
import Li from '../../../UI/UL/Li/Li';
import Button from '../../../UI/Button/Button';
import Container from '../../../UI/Container/Container'
import Wrap from '../../../UI/Wrap/Wrap';

const Specialists = () => {
  return (
    <section className={spec.specialists}>
      <Container>
        <div className={spec.container}>
          <H2 className={spec.header}>
            Мы отбираем только опытных специалистов <br /><br />
            <span>Вы можете нам доверять!</span>
          </H2>
          <div className={spec.wrapper}>
            <figure className={spec.imgWrapper}>
              <p className={spec.text}>+ 1500 специалистов в вашем телефоне</p>
              <IMG
                src={Specialist}
                alt='специалисты'
                className={spec.img}
              ></IMG>
            </figure>
            <UL className={spec.list}>
              <Li className={spec.listItemEdu}>
                <H3 className={spec.listHeader}>Образование</H3>
                <p className={spec.listText}>
                  Высшее психологическое, гуманитарное и дополнительное
                  психотерапевтическое.
                </p>
              </Li>
              <Li className={spec.listItemExp}>
                <H3 className={spec.listHeader}>Опыт работы</H3>
                <p className={spec.listText}>
                  От трех лет. За это время накапливается хороший практический
                  опыт
                </p>
              </Li>
              <Li className={spec.listItemInter}>
                <H3 className={spec.listHeader}>Собеседование</H3>
                <p className={spec.listText}>
                  Проверяем самое важное: навыки и успешные кейсы из практики.
                </p>
              </Li>
              <Li className={spec.listItemStudy}>
                <H3 className={spec.listHeader}>Обучение</H3>
                <p className={spec.listText}>
                  И мастерам важно учиться. Развиваем через семинары и супервизии.
                </p>
              </Li>
            </UL>
          </div>
          <div className={spec.buttonWrapper}>
            <Button className='dark'>Подобрать своего специалиста</Button>
          </div>
          <p className={spec.confidential}>100% конфиденциальность</p>
        </div>
      </Container>
    </section>
  );
};

export default Specialists;
