import {Route, Routes} from 'react-router-dom';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Music} from './components/Music/Music';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from './components/News/News';
import {Profile} from "./components/Profile/Profile";
import {Settings} from './components/Settings/Settings';
import {MessagesContainer} from "./components/Messages/MessagesContainer";
// import { StoreType } from "./redux/store";

// type AppPropsType = {
//     store: StoreType
// }

const App = () => {
    return (

        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.content}>
                <Routes>
                    <Route path='/messages/*'
                           element={<MessagesContainer/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
