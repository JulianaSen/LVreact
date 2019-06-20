import { createStore } from 'redux';

const initialState = {
    chooseAll: false,
    hotel: false,
    motel: false,
    hostel: false,
    flat: false
}

const reducer = (state = initialState, action) => {
    return state;
}


const store = createStore(reducer);


const mapStateToProps = (state) => {
    return {
        chooseAll: state.chooseAll
    }
}

export {mapStateToProps};
export default store;