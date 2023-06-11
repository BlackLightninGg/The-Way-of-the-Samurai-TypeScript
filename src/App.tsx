import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { Header } from "./components/Header/Header";
import { Messages } from "./components/Messages/Messages";
import { Music } from './components/Music/Music';
import { Navbar } from "./components/Navbar/Navbar";
import { News } from './components/News/News';
import { Profile } from "./components/Profile/Profile";
import { Settings } from './components/Settings/Settings';
// import { StoreType } from "./redux/store";

// type AppPropsType = {
//     store: StoreType
// }

const App = ({ store }: any) => {
    const { messagesData, profileData } = store.getState()
    console.log(profileData)
    const dispatch = store.dispatch.bind(store)
    return (

        <div className={s.appWrapper}>
            <Header />
            <Navbar friendsData={messagesData.messagesUsersData} />
            <div className={s.content}>
                <Routes>
                    <Route path='/messages/*' element={<Messages messagesData={messagesData} dispatch={dispatch} />} />
                    <Route path='/profile' element={<Profile profileData={profileData} dispatch={dispatch} />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
