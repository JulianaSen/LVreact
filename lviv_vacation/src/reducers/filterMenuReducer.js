import { ACTION_CHECK_ALL, ACTION_CHECK_HOTEL, ACTION_CHECK_MOTEL,
    ACTION_CHECK_HOSTEL, ACTION_CHECK_FLAT } from '../actions/actionFilterMenu';
const initialState = {
    checkAll: false,
    checkHotel: false,
    checkMotel: false,
    checkHostel: false,
    checkFlat: false
};

function checkingItems(state, checkOne, checkTwo, checkThree, action, newCheck) {
    if(checkOne && checkTwo && checkThree && action.payload) {
        return {...state,
            [newCheck]: action.payload,
            checkAll: action.payload
           }
    } else if(checkOne && checkTwo && checkThree && action.payload != true) {
        return { ...state,
            [newCheck]: action.payload,
            checkAll: action.payload
        }
    } else {
        return {...state, [newCheck]: action.payload }
    }
}
    
const reducerFilterMenu = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_CHECK_ALL:
            return { ...state, checkAll: action.payload,
                        checkHotel: action.payload,
                        checkFlat: action.payload,
                        checkMotel: action.payload,
                        checkHostel: action.payload
                    }
            break;
        case ACTION_CHECK_HOTEL:
                return checkingItems(state, state.checkMotel, state.checkHostel, state.checkFlat, action, 'checkHotel');
                 break;
        case ACTION_CHECK_MOTEL:
                return checkingItems(state, state.checkHotel, state.checkHostel, state.checkFlat, action, 'checkMotel');
                break;
                
        case ACTION_CHECK_HOSTEL:
            return checkingItems(state, state.checkHotel, state.checkMotel, state.checkFlat, action, 'checkHostel');
            break;
        case ACTION_CHECK_FLAT:
            return checkingItems(state, state.checkHotel, state.checkMotel, state.checkHostel, action, 'checkFlat');
            break;
    }

    return state;
};

export default reducerFilterMenu;

