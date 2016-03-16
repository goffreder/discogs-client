import React from 'react';

import { Route } from 'react-router';

import { AppContainer } from './components/App';
import { Main } from './components/Main';
import { CollectionContainer } from './components/Collection';
import { Wantlist } from './components/Wantlist';
import { About } from './components/About';

export default (
    <Route component={AppContainer}>
        <Route path="/" component={Main} />
        <Route path="/collection" component={CollectionContainer} />
        <Route path="/wantlist" component={Wantlist} />
        <Route path="/about" component={About} />
    </Route>
);
