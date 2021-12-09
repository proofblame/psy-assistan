import Reasons from '../../components/Reasons/Reasons';
import UL from '../../UI/UL/UL';
import { list } from '../../utils/config';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <section className='main'>
      <Reasons />
      <UL isArray={true} className='list__separated'>
        {list}
      </UL>
    </section>
  );
};

export default Main;
