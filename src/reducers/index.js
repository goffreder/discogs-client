import { Map } from 'immutable';

function toggleNavState(state) {
    return state.set('leftNavOpen', !state.get('leftNavOpen', false));
}

function setLoadingStatus(state, loading) {
    return state.set('loading', loading);
}

export default (state = Map(), action) => {
    switch (action.type) {
        case 'TOGGLE_NAV_STATE':
            return toggleNavState(state);
        case 'COLLECTION_REQUEST':
            return setLoadingStatus(state, true);
        case 'COLLECTION_SUCCESS':
            return setLoadingStatus(state, false);
        default:
            return state;
    }
};
