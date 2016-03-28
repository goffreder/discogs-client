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

    it('OPEN_RELEASE sets the current release property', () => {
        const action = {
            type: 'OPEN_RELEASE',
            releaseId: 1
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(Map({
            currentRelease: 1
        }));
    });

    it('CLOSE_RELEASE unsets the current release property', () => {
        const initialState = Map({
            currentRelease: 1
        });
        const action = { type: 'CLOSE_RELEASE' };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map());
    });

    it('CLOSE_ERROR unsets the error property', () => {
        const initialState = Map({
            error: Map()
        });
        const action = { type: 'CLOSE_ERROR' };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map());
    });

    it('COLLECTION_REQUEST sets the collection loaded and the loader', () => {
        const action = { type: 'COLLECTION_REQUEST' };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(Map({
            loading: true,
            collectionLoaded: true
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

    it('COLLECTION_FAILURE sets the error and unsets the loader', () => {
        const initialState = Map({ loading: true });
        const action = {
            type: 'COLLECTION_FAILURE',
            error: { message: 'Error' }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map({
            loading: false,
            error: Map({
                message: 'Error'
            })
        }));
    });
});
