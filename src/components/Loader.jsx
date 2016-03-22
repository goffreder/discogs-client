import React from 'react';

import MUICircularProgress from 'material-ui/lib/circular-progress';

export default class Loader extends React.Component {
    render() {
        return <div className="loader"><MUICircularProgress size={2} /></div>;
    }
}
