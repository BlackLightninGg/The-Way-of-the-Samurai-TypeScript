import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
// import { store } from "./redux/store";
import {reduxStore} from "./redux/reduxStore";


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={reduxStore} />,
        </BrowserRouter>,
        document.getElementById('root')
    );
}
reduxStore.subscribe(renderEntireTree)
renderEntireTree()