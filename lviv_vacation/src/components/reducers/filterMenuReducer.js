import { ACTION_CHECK_ALL, ACTION_CHECK_HOTEL, ACTION_CHECK_MOTEL,
    ACTION_CHECK_HOSTEL, ACTION_CHECK_FLAT } from '../../actions/actionFilterMenu';
const initialState = {
    checkAll: false,
    checkHotel: false,
    checkMotel: false,
    checkHostel: false,
    checkFlat: false
};

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
                if(state.checkMotel && state.checkHostel && state.checkFlat && action.payload) {
                    return {...state,
                        checkHotel: action.payload,
                        checkAll: action.payload
                       }
                } else if(state.checkMotel && state.checkHostel && state.checkFlat && action.payload != true) {
                    return { ...state,
                        checkHotel: action.payload,
                        checkAll: action.payload
                    }
                }
                return {...state,
                     checkHotel: action.payload,
                    }
                 break;
        case ACTION_CHECK_MOTEL:
                if(state.checkHotel && state.checkHostel && state.checkFlat && action.payload) {
                    return {...state,
                        checkMotel: action.payload,
                        checkAll: action.payload
                       }
                } else if(state.checkHotel && state.checkHostel && state.checkFlat && action.payload != true) {
                    return { ...state,
                        checkMotel: action.payload,
                        checkAll: action.payload
                    }
                }
                return { ...state,
                    checkMotel: action.payload
                }
                break;
        case ACTION_CHECK_HOSTEL:
            if(state.checkHotel && state.checkMotel && state.checkFlat && action.payload) {
                return {...state,
                    checkHostel: action.payload,
                    checkAll: action.payload
                    }
            } else if(state.checkHotel && state.checkMotel && state.checkFlat && action.payload != true) {
                return { ...state,
                    checkHostel: action.payload,
                    checkAll: action.payload
                }
            }

            return { ...state,
                checkHostel: action.payload
                
            }
            break;
        case ACTION_CHECK_FLAT:

            if(state.checkHotel && state.checkMotel && state.checkHostel && action.payload) {
                return {...state,
                    checkFlat: action.payload,
                    checkAll: action.payload
                    }
            } else if(state.checkHotel && state.checkMotel && state.checkHostel && action.payload != true) {
                return { ...state,
                    checkFlat: action.payload,
                    checkAll: action.payload
                }
            }

            return { ...state, 
                checkFlat: action.payload

            }
            break;
        
    }
    
    return state;
};

export default reducerFilterMenu;

