import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import { store } from "./redux/store";

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />,
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(renderEntireTree)
renderEntireTree()