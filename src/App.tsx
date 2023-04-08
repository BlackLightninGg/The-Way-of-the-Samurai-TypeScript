import { BrowserRouter, Route, Routes } from 'react-router-dom';
import s from './App.module.css'
import { Header } from "./components/Header/Header";
import { Messages } from "./components/Messages/Messages";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <Navbar />
        <div className={s.content}>
          <Routes>
            <Route path='/messages/*' element={<Messages />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
