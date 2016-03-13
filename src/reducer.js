import { Map } from 'immutable';

function toggleNavState(state) {
    console.log(state.toJS());
    return state.set('leftNavOpen', !state.get('leftNavOpen', false));
}

export default (state = Map(), action) => {
    switch (action.type) {
        case 'TOGGLE_NAV_STATE':
            return toggleNavState(state);
        default:
            return state;
    }
};
