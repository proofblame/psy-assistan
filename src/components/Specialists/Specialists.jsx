import spec from './Specialists.module.scss';
import Container from '../../UI/Container/Container';
import H2 from '../../UI/H2/H2';
import H3 from '../../UI/H3/H3';
import IMG from '../../UI/IMG/IMG';
import UL from '../../UI/UL/UL';
import Specialist from '../../images/Specialist.svg';
import Li from '../../UI/UL/Li/Li';
import Button from '../../UI/Button/Button';

const Specialists = () => {
  return (
    <section className='specialists'>
      <Container>
        <div className={spec.headerWrapper}>
          <H2 className={spec.header}>
            Мы отбираем только опытных специалистов
          </H2>
          <H3 className={spec.subheader}>Вы можете нам доверять!</H3>
        </div>
        <div className={spec.wrapper}>
          <div className={spec.imgWrapper}>
            <p className={spec.text}>+ 1500 специалистов в вашем телефоне</p>
            <IMG
              src={Specialist}
              alt='специалисты'
              className={spec.specialist}
            ></IMG>
          </div>
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
        <Button className='dark'>Подобрать своего специалиста</Button>
      </Container>
    </section>
  );
};

export default Specialists;
