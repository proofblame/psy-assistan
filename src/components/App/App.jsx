import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Header/Navbar/NavBar';
import style from './App.module.scss';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(!isOpened);
    if (isOpened) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div className={style.app}>
      <Header isOpened={isOpened} handleOpen={handleOpen} />
      <Navbar isOpened={isOpened} handleOpen={handleOpen} />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
