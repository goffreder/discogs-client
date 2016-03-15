import { Map } from 'immutable';

function toggleNavState(state) {
    return state.set('leftNavOpen', !state.get('leftNavOpen', false));
}

export default (state = Map(), action) => {
    console.log('reducer', state.toJS(), action);

    switch (action.type) {
        case 'TOGGLE_NAV_STATE':
            return toggleNavState(state);
        default:
            return state;
    }
};
