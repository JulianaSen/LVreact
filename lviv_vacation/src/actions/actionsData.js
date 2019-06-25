import data from '../dt.json';
import axios from 'axios'; 
import { SET_BUDGET } from './actionsForm.js';

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