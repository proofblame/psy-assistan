import choose from './ChooseSpec.module.scss';

import Wrap from '../../../UI/Wrap/Wrap';
import H1 from '../../../UI/H1/H1';
import H3 from '../../../UI/H3/H3';
import Button from '../../../UI/Button/Button';
import Container from '../../../UI/Container/Container';

const ChooseSpec = () => {
  return (
    <section className={choose.spec}>
      <div className={choose.specContainer}>
        <Container>
          <div className={choose.container}>
            <Wrap className={choose.wrap}>
              <div className={choose.headerWrap}>
                <H1 className={choose.headerMain}>
                  Общайтесь <br /> с психологом в любое время и в любом месте
                </H1>
                <h3 className={choose.subheader}>
                  Онлайн консультации с проверенными специалистами
                </h3>
                <div className={choose.buttonWrapper}>
                  <Button className='dark'>Выбрать специалиста</Button>
                  <p className={choose.text}>2 850 ₽ за сессию</p>
                </div>
              </div>
            </Wrap>
            <div className={choose.buttonContainer}>
              <div>
                <p className={choose.info}>
                  100%
                </p>
                <p className={choose.infoSub}>
                  конфиденциальность
                </p>
              </div>
              <div>
                <p className={choose.info}>
                  1 500
                </p>
                <p className={choose.infoSub}>
                  специалистов
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </section>
  );
};

export default ChooseSpec;
