import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from '../src/components/App/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers/rootReducer';
//import { loadState, saveState } from './localStorage';

//const loadedState = loadState();
const store = createStore(
    rootReducer,
    //loadedState,
    applyMiddleware(thunk)
);

// store.subscribe(() => {
//     saveState(
//         store.getState()
//     );
//     //console.log(store.getState());
// });

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
export {store};