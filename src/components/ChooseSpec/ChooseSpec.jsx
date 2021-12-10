import choose from './ChooseSpec.module.scss';

import Wrap from '../../UI/Wrap/Wrap';
import H1 from '../../UI/H1/H1';
import H3 from '../../UI/H3/H3';
import Button from '../../UI/Button/Button';

const ChooseSpec = () => {
  return (
    <section className={choose.spec}>
      <div className={choose.background}>
        <Wrap className={choose.wrap}>
          <div className={choose.headerWrap}>
            <H1 className={choose.headerMain}>
              Общайтесь <br /> с психологом в любое время и в любом месте
            </H1>
            <H3 className={choose.subheader}>
              Онлайн консультации с проверенными специалистами
            </H3>
            <div className={choose.buttonContainer}>
              <Button className='dark'>Выбрать специалиста</Button>
              <p className={choose.text}>2 850 ₽ за сессию</p>
            </div>
          </div>
        </Wrap>
      </div>
      <div className={choose.backgroundLine}></div>
      <div className={choose.buttonContainer}>
        <p className={choose.info}>
          100% <span className={choose.infoSub}> конфиденциальность</span>
        </p>
        <p className={choose.info}>
          1 500 <span className={choose.infoSub}>специалистов</span>
        </p>
      </div>
    </section>
  );
};

export default ChooseSpec;
