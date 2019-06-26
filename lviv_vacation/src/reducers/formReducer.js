// import { SET_BUDGET, SET_USERNAME, SET_EMAIL, SET_PASSWORD, ERROR } from '../actions/actionsForm';

// const initialState = {
//     budget: '',
//     userName: '',
//     email: '',
//     password: '', 
//     error: ''
// };

// export default function formReducer(state=initialState, action) {
//     switch(action.type) {
//         case SET_BUDGET:
//             return {
//                 ...state,
//                 budget: action.budget
//             }

//         case SET_USERNAME:
//             return {
//                 ...state,
//                 userName: action.userName
//             }

//         case SET_EMAIL:
//             return {
//                 ...state,
//                 email: action.email
//             }

//         case SET_PASSWORD:
//             return {
//                 ...state,
//                 password: action.password
//             }    
        
//         case ERROR: 
//             return {
//                 ...state,
//                 error: action.error
//             }

//         default:
//             return state;
//     }
// }