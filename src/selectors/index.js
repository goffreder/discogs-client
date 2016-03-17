import { List } from 'immutable';

import { createSelector } from 'reselect';

const getRawCollection = state => state.get('collection', List()).toJS();

export const getCollection = createSelector(
    getRawCollection,
    collection => collection.map(r => {
        return {
            id: r.id,
            title: r.basic_information.title,
            artist: r.basic_information.artists.map(a => a.name).join(', '),
            year: r.basic_information.year
        };
    })
);
