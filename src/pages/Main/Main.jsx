import Reasons from '../../components/Reasons/Reasons';
import Specialists from '../../components/Specialists/Specialists';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <section className='main'>
      <Reasons />
      <Specialists />
    </section>
  );
};

export default Main;
