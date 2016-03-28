import { CALL_API } from '../middleware/api';
import { COLLECTION_ENDPOINT } from '../constants/api';

import * as actions from '../constants/actions';

export function toggleNav() {
    return { type: actions.TOGGLE_NAV_STATE };
}

export function openRelease(releaseId) {
    return {
        type: actions.OPEN_RELEASE,
        releaseId
    };
}

export function closeRelease() {
    return { type: actions.CLOSE_RELEASE };
}

export function closeError() {
    return { type: actions.CLOSE_ERROR };
}

function fetchCollection() {
    return {
        [CALL_API]: {
            types: [
                actions.COLLECTION_REQUEST,
                actions.COLLECTION_SUCCESS,
                actions.COLLECTION_FAILURE
            ],
            endpoint: COLLECTION_ENDPOINT
        }
    };
}

export function loadCollection() {
    return dispatch => dispatch(fetchCollection());
}
