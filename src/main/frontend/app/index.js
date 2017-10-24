import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

import App from "./App";
import reducers from "./reducers";
import "./template/js/agency";

let store = createStore(reducers, applyMiddleware(logger));

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    <Root/>,
    document.querySelector('#app')
);

