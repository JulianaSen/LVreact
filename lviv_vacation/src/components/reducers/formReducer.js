const initialState = {
    budget: "",
    userName: null,
    email: null,
    password: null
};

export default function formReducer(state=initialState, action) {
    switch(action.type) {
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.budget
            }

        case 'SET_USERNAME':
            return {
                ...state,
                userName: action.userName
            }

        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }

        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.password
            }    

        case 'CLEAR':
            return {
                ...state,
                budget: "",
                userName: "",
                email: "",
                password: ""
            }    

        default:
            return state;
    }
}