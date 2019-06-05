import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas'
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import fetchReducer from "./reducers/";

const sagaMiddleware = createSagaMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composed = compose(applyMiddleware(sagaMiddleware), devtools);

export const store = createStore(fetchReducer, composed);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
