const initialState = {
    items: [],
    error: null
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


        default:
            return state;
    }
}