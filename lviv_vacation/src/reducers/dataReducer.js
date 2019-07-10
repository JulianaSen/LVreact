const initialState = {
    items: [],
    error: null,
    userItems: [],
    filterItems: []
};





export default function dataReducer(state=initialState, action) {
    switch(action.type) {
        case 'FETCH_DATA_FAILURE':
          return {
            ...state,
            error: action.payload.error,
            items: [],
          };
        
        
        case 'FETCH_DATA_SUCCESS':
          return {
            ...state,
            items: action.payload.posts,
            filterItems: [ ...action.payload.posts]
          };


        case 'FETCH_USER_CHOICE':
          return {
            ...state,
            userItems: action.payload.choice
          };

        case 'ADD_USER_CHOICE':
          return {
            ...state,
            userItems: [...state.userItems, action.payload.choice]
          };
        
        case 'DELETE_USER_CHOICE':
            return {
              ...state,
              userItems: state.userItems.filter(item => item.id !== action.payload.id)
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