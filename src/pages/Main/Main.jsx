import ChooseSpec from '../../components/ChooseSpec/ChooseSpec';
import Reasons from '../../components/Reasons/Reasons';
import Specialists from '../../components/Specialists/Specialists';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <section className={styles.main}>
      <ChooseSpec />
      <Reasons />
      <Specialists />
    </section>
  );
};

export default Main;
