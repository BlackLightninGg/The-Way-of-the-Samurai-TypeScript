import React from 'react';
import './index.css';
import {addPost, changePostText, state, StateType, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostText={changePostText} />,
        </BrowserRouter>,
        document.getElementById('root')
    );
}
subscriber(renderEntireTree)
renderEntireTree(state)