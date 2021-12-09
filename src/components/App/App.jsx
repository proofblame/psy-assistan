import { Switch, Route, useLocation } from "react-router-dom";
import Main from '../../pages/Main/Main';
import MainPages from '../../pages/MainPages/MainPages';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/main">
          <MainPages />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
