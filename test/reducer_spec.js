import { Map } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducers';

describe('reducer', () => {
    it('TOGGLE_NAV_STATE the first time opens the left nav', () => {
        const action = { type: 'TOGGLE_NAV_STATE' };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(Map({
            leftNavOpen: true
        }));
    });

    it('TOGGLE_NAV_STATE opens the left nav if closed', () => {
        const initialState = Map({
            leftNavOpen: false
        });
        const action = { type: 'TOGGLE_NAV_STATE' };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map({
            leftNavOpen: true
        }));
    });

    it('TOGGLE_NAV_STATE closes the left nav if open', () => {
        const initialState = Map({
            leftNavOpen: true
        });
        const action = { type: 'TOGGLE_NAV_STATE' };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map({
            leftNavOpen: false
        }));
    });
});
