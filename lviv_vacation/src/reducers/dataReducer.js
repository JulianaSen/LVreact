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

          case 'ADD_USER_DATA':
              return {
                ...state,
                userItems: [...state.userItems, action.payload.item]
              }


        default:
            return state;
    }
}