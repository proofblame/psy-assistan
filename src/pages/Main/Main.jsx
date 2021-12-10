import ChooseSpec from './ChooseSpec/ChooseSpec';
import Reasons from './Reasons/Reasons';
import Specialists from './Specialists/Specialists';
import СhoiceSpecialist from './СhoiceSpecialist/СhoiceSpecialist'
import AboutService from './AboutService/AboutService'
import Statistics from './Statistics/Statistics'
import Important from './Important/Important'

import styles from './Main.module.scss';

const Main = () => {
  return (
    <section className={styles.main}>
      <ChooseSpec />
      <Reasons />
      <Specialists />
      <СhoiceSpecialist />
      <AboutService />
      <Statistics />
      <Important />
    </section>
  );
};

export default Main;
