import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { callApi } from './middleware/api';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './reducers';

import routes from './routes';

require('./styles/normalize.min.css');
require('./styles/font.css');
require('./styles/styles.css');

const store = createStore(reducer, undefined, applyMiddleware(thunk, callApi));

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);

// import ReleaseCard from './components/ReleaseCard';
//
// ReactDOM.render(
//     <ReleaseCard />,
//     document.getElementById('app')
// );
