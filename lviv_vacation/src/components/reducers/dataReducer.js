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
                filterItems: [...action.payload.posts]
          };

        case 'FILTER_ITEMS':
                return {
                    ...state,
                    filterItems: [ ...state.items.filter((item) => {
                  
                         let ObjCheck = {
                            "Hotel": action.value.checkedItems.checkHotel,
                            "Flat": action.value.checkedItems.checkFlat,
                            "Motel": action.value.checkedItems.checkMotel,
                            "Hostel": action.value.checkedItems.checkHostel
                        }                                                             
                            if(ObjCheck[item.whatIsIt]) {
                                return item;
                            } else if(action.value.checkedItems.checkAll) {
                                return item;
                            } else if(!action.value.checkedItems.checkFlat && !action.value.checkedItems.checkHostel && !action.value.checkedItems.checkHotel && !action.value.checkedItems.checkMotel) {
                                return item;
                            }          
                          
                        })  ]
                };
        default:
            return state;
    }
}