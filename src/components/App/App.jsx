import { Routes, Route } from "react-router-dom";
import Main from '../../pages/Main/Main';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div >
  );
}

export default App;
