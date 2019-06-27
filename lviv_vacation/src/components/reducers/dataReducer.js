const initialState = {
    items: [],
    loading: false,
    error: null,
    filterItems: []
};



export default function dataReducer(state=initialState, action) {
    switch(action.type) {
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            };
    

        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                items: action.payload.posts,
                filterItems: action.payload.posts
          };

        case 'FILTER_ITEMS':
                console.log("pezda");
                console.log(state);
                console.log(action.value);
                return {
                    ...state,
                    items: [ ...state.items.splice(4) ]
                };
        default:
            return state;
    }
}