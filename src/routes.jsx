import React from 'react';

import { Route } from 'react-router';

import App from './components/App';
import { MainContainer } from './components/Main';
import { Collection } from './components/Collection';
import { Wantlist } from './components/Wantlist';
import { About } from './components/About';

export default (
    <Route component={App}>
        <Route path="/" component={MainContainer} />
        <Route path="/collection" component={Collection} />
        <Route path="/wantlist" component={Wantlist} />
        <Route path="/about" component={About} />
    </Route>
);
