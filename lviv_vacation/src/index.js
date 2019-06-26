import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from '../src/components/App/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducer from '../src/reducers/rootReducer';
import { loadState, saveState } from './localStorage';

const loadedState = loadState();
const store = createStore(
    combineReducer,
    //loadedState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState(
        store.getState()
    );
});

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

export {store};