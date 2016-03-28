import axios from 'axios';

import { ROOT } from '../constants/api';

const createActionFromAPISuccess = (type, response) => {
    let action = { type };

    Object.keys(response.data).forEach(f => {
        action[f] = response.data[f];
    });

    return action;
};

const createActionFromAPIFailure = (type, error) => {
    let action = { type };

    if (error.status) {
        action.error = error.data;
    } else {
        action.error = { message: error.toString() };
    }

    return action;
};

export const CALL_API = Symbol('Call API');

export const callApi = () => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, types } = callAPI;
    let URL = (endpoint.indexOf(ROOT) === -1 ? ROOT : '') + endpoint;

    const [ requestType, successType, failureType ] = types;

    next({ type: requestType });

    return axios.get(URL)
        .then(response => next(createActionFromAPISuccess(
            successType,
            response
        )))
        .catch(error => next(createActionFromAPIFailure(failureType, error)));
};
