import React from "react";
import {Route, Routes} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Messages} from "./components/Messages/Messages";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {StateType} from "./redux/state";
import s from './App.module.css'

type PropsType = {
    state: StateType
}

const App: React.FC<PropsType> = (props) => {
    const {messagesUsersData, messagesTextData, postData} = props.state
    return (

        <div className={s.appWrapper}>
            <Header/>
            <Navbar friendsData={messagesUsersData}/>
            <div className={s.content}>
                <Routes>
                    <Route path='/messages/*' element={<Messages messagesUsersData={messagesUsersData}
                                                                 messagesTextData={messagesTextData}/>}/>
                    <Route path='/profile' element={<Profile postData={postData}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
