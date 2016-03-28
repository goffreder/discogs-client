import { Map, fromJS } from 'immutable';

import * as actions from '../constants/actions';

function toggleNavState(state) {
    return state.set('leftNavOpen', !state.get('leftNavOpen', false));
}

function setLoadingStatus(state, loading) {
    return state.set('loading', loading);
}

function setCollectionLoaded(state) {
    return state.set('collectionLoaded', true);
}

function setCollection(state, releases) {
    return state.set('collection', fromJS(releases));
}

function openRelease(state, releaseId) {
    return state.set('currentRelease', releaseId);
}

function closeRelease(state) {
    return state.delete('currentRelease');
}

function setError(state, error) {
    return state.set('error', fromJS(error));
}

function closeError(state) {
    return state.delete('error');
}

export default (state = Map(), action) => {
    switch (action.type) {
        case actions.TOGGLE_NAV_STATE:
            return toggleNavState(state);
        case actions.COLLECTION_REQUEST:
            return setCollectionLoaded(setLoadingStatus(state, true));
        case actions.COLLECTION_SUCCESS:
            return setCollection(
                setLoadingStatus(state, false),
                action.releases
            );
        case actions.COLLECTION_FAILURE:
            return setError(
                setLoadingStatus(state, false),
                action.error
            );
        case actions.OPEN_RELEASE:
            return openRelease(state, action.releaseId);
        case actions.CLOSE_RELEASE:
            return closeRelease(state);
        case actions.CLOSE_ERROR:
            return closeError(state);
        default:
            return state;
    }
};
