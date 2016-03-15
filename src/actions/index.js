import { CALL_API } from '../middleware/api';

export function toggleNav() {
    return { type: 'TOGGLE_NAV_STATE' };
}

export const COLLECTION_REQUEST = 'COLLECTION_REQUEST';
export const COLLECTION_SUCCESS = 'COLLECTION_SUCCESS';
export const COLLECTION_FAILURE = 'COLLECTION_FAILURE';

function fetchCollection() {
    return {
        [CALL_API]: {
            types: [
                COLLECTION_REQUEST,
                COLLECTION_SUCCESS,
                COLLECTION_FAILURE
            ],
            endpoint: 'users/goffreder/collection/folders/0/releases'
        }
    };
}

export function loadCollection() {
    return dispatch => dispatch(fetchCollection());
}

function testAction1() {
    return { type: 'TEST_ACTION1' };
}

function testAction2() {
    return { type: 'TEST_ACTION2' };
}

export function testAction() {
    return dispatch => {
        dispatch(testAction1());
        dispatch(testAction2());
    };
}
