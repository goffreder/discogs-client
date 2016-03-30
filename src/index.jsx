import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, hashHistory } from 'react-router';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { callApi } from './middleware/api';
// import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

// import reducer from './reducers';

// import routes from './routes';

require('./styles/normalize.min.css');
require('./styles/font.css');
require('./styles/styles.css');

// const store = createStore(reducer, undefined, applyMiddleware(thunk, callApi));

injectTapEventPlugin();

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={hashHistory}>{routes}</Router>
//     </Provider>,
//     document.getElementById('app')
// );

import ReleaseCard from './components/ReleaseCard';

const tracklist = JSON.parse('[{"duration": "5:10", "position": "A1", "type_": "track", "title": "Hells Bells"}, {"duration": "5:17", "position": "A2", "type_": "track", "title": "Shoot To Thrill"}, {"duration": "3:36", "position": "A3", "type_": "track", "title": "What Do You Do For Money Honey"}, {"duration": "3:31", "position": "A4", "type_": "track", "title": "Given The Dog A Bone"}, {"duration": "4:12", "position": "A5", "type_": "track", "title": "Let Me Put My Love Into You"}, {"duration": "4:17", "position": "B1", "type_": "track", "title": "Back In Black"}, {"duration": "3:29", "position": "B2", "type_": "track", "title": "You Shook Me All Night Long"}, {"duration": "4:01", "position": "B3", "type_": "track", "title": "Have A Drink On Me"}, {"duration": "4:04", "position": "B4", "type_": "track", "title": "Shake A Leg"}, {"duration": "4:12", "position": "B5", "type_": "track", "title": "Rock And Roll Ain\'t Noise Pollution"}]');

ReactDOM.render(
    <ReleaseCard
        tracklist={tracklist}
        artist="Tool"
        title="Lateralus"
        year={1996}
    />,
    document.getElementById('app')
);
