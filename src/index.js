import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// this is the redux store creation util
import {createStore} from "redux";

// we cannot createStore on multiple reducers. We create as such a combined reducer with all the reducers we need.
import rootReducer from "./reducers";

// provider makes sure we have access to the store for everything the Provider wraps bellow
import {Provider} from "react-redux";

// this is the redux store we use for a "big state" that does not have to be passed down like you would
// usually do with props
const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
