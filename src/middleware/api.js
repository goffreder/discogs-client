import axios from 'axios';

import { ROOT } from '../constants/api';

const createActionFromAPIResponse = (type, response) => {
    let action = { type };

    if (response.status !== 200) {
        action.error = response.data;
    } else {
        Object.keys(response.data).forEach(f => {
            action[f] = response.data[f];
        });
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
        .then(response => next(createActionFromAPIResponse(
            successType,
            response
        )))
        .catch(error => next(createActionFromAPIResponse(failureType, error)));
};
