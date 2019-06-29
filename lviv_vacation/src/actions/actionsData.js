export function fetchData(route) {
    return dispatch => {
        return  fetch(route)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

export function fetchChoice(route) {
    return dispatch => {
        return  fetch(route)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchUserChoice(json));
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
    payload: {error}

});

export const addUserChoice = item => ({
    type: 'ADD_USER_CHOICE',
    payload: { item }
});

export const fetchUserChoice = choice => ({
    type: 'FETCH_USER_CHOICE',
    payload: { choice }
});


export const deleteUserChoice = id => ({
    type: 'DELETE_USER_CHOICE',
    payload: { id }
});