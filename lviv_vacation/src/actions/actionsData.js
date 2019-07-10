import { authHeader } from "../helpers/authHelper";

export function fetchHotels() {
    return dispatch => {
        return  fetch("http://127.0.0.1:5000/api/content/hotel")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}


export function fetchRestaraunts() {
    return dispatch => {
        return  fetch("http://127.0.0.1:5000/api/content/restaurant")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

export function fetchEntertainments() {
    return dispatch => {
        return  fetch("http://127.0.0.1:5000/api/content/entertainment")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

//Get all items in user's basket
export function fetchBasket() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return dispatch => {
        return  fetch("http://127.0.0.1:5000/api/basket/items/all", requestOptions)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchUserChoice(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}


//Delete item from table basket in DB
export function deleteChoice(contentID){

    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    }
    
    return dispatch => {
        fetch(`http://127.0.0.1:5000/api/basket/items/${contentID}`, requestOptions)
        .then(() => {
            dispatch(deleteUserChoice(contentID));
        })
        .catch(error => {
            console.log(error);
        })
    };
}

export const fetchDataSuccess = posts => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: { posts }
});

export const fetchDataFailure = error => ({
    type: 'FETCH_DATA_FAILURE',
    payload: { error }

});

export const addUserChoice = choice => ({
    type: 'ADD_USER_CHOICE',
    payload: { choice }
});

export const fetchUserChoice = choice => ({
    type: 'FETCH_USER_CHOICE',
    payload: { choice }
});


export const deleteUserChoice = id => ({
    type: 'DELETE_USER_CHOICE',
    payload: { id }
});