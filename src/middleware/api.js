import axios from 'axios';

const API_ROOT = 'https://api.discogs.com/';

export const CALL_API = Symbol('Call API');

export const callApi = () => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, types } = callAPI;
    let URL = (endpoint.indexOf(API_ROOT) === -1 ? API_ROOT : '') + endpoint;

    const [ requestType, successType, failureType ] = types;

    next({ type: requestType });

    return axios.get(URL)
        .then(response => next({ type: successType, response }))
        .catch(error => next({ type: failureType, error }));
};
