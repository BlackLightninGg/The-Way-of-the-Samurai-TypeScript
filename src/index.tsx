import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
// import { store } from "./redux/store";
import {reduxStore} from "./redux/reduxStore";
import {Provider} from "./redux/storeContext";


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider value={reduxStore}>
                <App/>,
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
reduxStore.subscribe(renderEntireTree)
renderEntireTree()