import React from 'react';

import { Route } from 'react-router';

import App from './containers/App';
import Main from './containers/Main';
import Collection from './containers/Collection';
import Wantlist from './containers/Wantlist';

export default (
    <Route component={App}>
        <Route path="/" component={Main} />
        <Route path="/collection" component={Collection} />
        <Route path="/wantlist" component={Wantlist} />
    </Route>
);
