import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './reducer';

import App from './components/App';
import { Main } from './components/Main';
import { Collection } from './components/Collection';
import { Wantlist } from './components/Wantlist';

require('./styles/normalize.min.css');
require('./styles/font.css');

const store = createStore(reducer);

const routes = (
    <Route component={App}>
        <Route path="/" component={Main} />
        <Route path="/collection" component={Collection}/>
        <Route path="/wantlist" component={Wantlist}/>
    </Route>
);

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
