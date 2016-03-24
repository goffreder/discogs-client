import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { callApi } from '../../src/middleware/api';
import nock from 'nock';

const middlewares = [ thunk, callApi ];
const mockStore = configureMockStore(middlewares);

import { expect } from 'chai';

import * as actions from '../../src/actions';
import * as types from '../../src/constants/actions';
import { ROOT, COLLECTION_ENDPOINT } from '../../src/constants/api';

describe('actions', () => {
    it('should create an action to toggle the nav state', () => {
        const expectedAction = { type: types.TOGGLE_NAV_STATE };

        expect(actions.toggleNav()).to.deep.equal(expectedAction);
    });
});

describe('async actions', () => {
    it('it creates COLLECTION_SUCCESS when fetching collection has been done', () => {
        afterEach(() => nock.cleanAll());

        nock(ROOT)
            .get(COLLECTION_ENDPOINT)
            .reply(200, { foo: 'bar' });

        const expectedActions = [
            { type: types.COLLECTION_REQUEST },
            { type: types.COLLECTION_SUCCESS, foo: 'bar' }
        ];
        const store = mockStore(undefined);

        return store.dispatch(actions.loadCollection())
            .then(() =>
                expect(store.getActions()).to.deep.equal(expectedActions)
            );
    });

    it('it creates COLLECTION_FAILURE when fetching collection has failed', () => {
        afterEach(() => nock.cleanAll());

        nock(ROOT)
            .get(COLLECTION_ENDPOINT)
            .reply(400);

        const expectedActions = [
            { type: types.COLLECTION_REQUEST },
            { type: types.COLLECTION_FAILURE }
        ];
        const store = mockStore(undefined);

        return store.dispatch(actions.loadCollection())
            .then(() =>
                expect(store.getActions()).to.deep.equal(expectedActions)
            );
    });
});
