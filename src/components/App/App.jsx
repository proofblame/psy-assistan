import { Routes, Route } from "react-router-dom";
import Main from '../../pages/Main/Main';
import MainPages from '../../pages/MainPages/MainPages';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<MainPages />} />
      </Routes>
    </div >
  );
}

export default App;
