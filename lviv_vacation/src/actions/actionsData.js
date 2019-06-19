import data from '../dt.json';
import axios from 'axios'; 
export function fetchData() {
    return dispatch => {
        return  fetch("http://localhost:3001/op/posts")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json));
            console.log(json);
            return json.posts;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

function handleErrors(responce) {
    if(!responce.ok){
        throw Error(responce.statusText)
    }
    return responce;
}

export const fetchDataSuccess = posts => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: { posts }
});

export const fetchDataFailure = error => ({
    type: 'FETCH_DATA_FAILURE',
    payload: {error}
});