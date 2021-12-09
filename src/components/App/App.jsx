import style from './App.module.scss';
import H1 from '../../UI/H1/H1';
import H2 from '../../UI/H2/H2';
import UL from '../../UI/UL/UL';
import H3 from '../../UI/H3/H3';
import Container from '../../UI/Container/Container';
import { list } from '../../utils/config';

function App() {
  return (
    <div className={style.app}>
      {/* <h1 className={style.app__title}>Привет</h1> */}
      <H1 className='main'>
        Общайтесь <br /> с психологом в любое время и в любом месте
      </H1>
      <H2 className='header'>
        Регулярные сессии с психологом повышают качество жизни
      </H2>
      <div className={style.wrapper}>
        <Container className={'container'}>
          <H3 className='header'>На какую тему вы хотели бы поговорить?</H3>
          <UL
            children={list}
            className='list__separated'
            classList='list__item_separated'
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
