export function fetchHotels() {
    return dispatch => {
        return  fetch("http://localhost:5000/api/content/hotel")
        .then(res => res.json())
        .then(json => {
            console.log("-------------->>>>>",json);
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

export function fetchBasket(user_id) {
    return dispatch => {
        return  fetch("http://127.0.0.1:5000/api/basket/1")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchUserChoice(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
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

export const addPrices = price => ({
    type: 'ADD_BASKET_PRICE',
    payload: { price }
});

export const minusPrices = price => ({
    type: 'MINUS_BASKET_PRICE',
    payload: { price }
});