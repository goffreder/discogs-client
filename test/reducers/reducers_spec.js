import { Map, List } from 'immutable';
import { expect } from 'chai';

import reducer from '../../src/reducers';

describe('reducers', () => {
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

    it('COLLECTION_REQUEST sets the loading property to true', () => {
        const action = { type: 'COLLECTION_REQUEST' };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(Map({
            loading: true
        }));
    });

    it('COLLECTION_SUCCESS sets the loading property to false', () => {
        const initialState = Map({
            loading: true
        });
        const action = { type: 'COLLECTION_SUCCESS', releases: [] };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map({
            loading: false,
            collection: List()
        }));
    });

    it('COLLECTION_SUCCESS sets the releases to the collection', () => {
        const releases = [{
            title: 'Lateralus',
            artist: 'Tool',
            year: 2001
        }, {
            title: 'Morningrise',
            artist: 'Opeth',
            year: 1996
        }];
        const action = { type: 'COLLECTION_SUCCESS', releases };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(Map({
            loading: false,
            collection: List.of(
                Map({
                    title: 'Lateralus',
                    artist: 'Tool',
                    year: 2001
                }),
                Map({
                    title: 'Morningrise',
                    artist: 'Opeth',
                    year: 1996
                })
            )
        }));
    });
});
