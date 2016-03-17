import { Map, fromJS } from 'immutable';

function toggleNavState(state) {
    return state.set('leftNavOpen', !state.get('leftNavOpen', false));
}

function setLoadingStatus(state, loading) {
    return state.set('loading', loading);
}

function setCollection(state, releases) {
    return state.set('collection', fromJS(releases));
}

export default (state = Map(), action) => {
    switch (action.type) {
        case 'TOGGLE_NAV_STATE':
            return toggleNavState(state);
        case 'COLLECTION_REQUEST':
            return setLoadingStatus(state, true);
        case 'COLLECTION_SUCCESS':
            return setCollection(
                setLoadingStatus(state, false),
                action.releases
            );
        default:
            return state;
    }
};
