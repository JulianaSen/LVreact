import { createStore } from 'redux';

const ACTION_CHECK_ALL = 'ACTION_CHECK_ALL';

const initialState = {
    checkAll: false
};

const reducer = (state = initialState) => {
    return state;
};

const store = createStore(reducer);
export {store};