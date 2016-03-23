import { fromJS } from 'immutable';
import { expect } from 'chai';

import * as selectors from '../../src/selectors';

describe('selectors', () => {
    it('should return collection items from API response', () => {
        const mockState = {
            collection: [{
                id: 1,
                basic_information: {
                    title: 'Lateralus',
                    artists: [{
                        name: 'Tool'
                    }],
                    year: 2001
                }
            }]
        };
        const collection = selectors.getCollection(fromJS(mockState));

        expect(collection).to.deep.equal([{
            id: 1,
            title: 'Lateralus',
            artist: 'Tool',
            year: 2001
        }]);
    });
});
