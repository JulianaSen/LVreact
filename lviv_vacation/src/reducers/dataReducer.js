const initialState = {
    items: [],
    error: null,
    userItems: []
};

export default function dataReducer(state=initialState, action) {
    switch(action.type) {
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                error: action.payload.error,
                items: []
            };
        
        
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                items: action.payload.posts

          };


        case 'FETCH_USER_CHOICE':
            return {
                ...state,
                userItems: action.payload.choice
            };

        case 'ADD_USER_CHOICE':
            return {
                ...state,
                userItems: [...state.userItems, action.payload.item]
              };
        
        case 'DELETE_USER_CHOICE':
            return {
                ...state,
                userItems: state.userItems.filter(item => item.id !== action.payload.id)
            };

        default:
            return state;
    }
}