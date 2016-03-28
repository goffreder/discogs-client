import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import MUICircularProgress from 'material-ui/lib/circular-progress';

export default class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render() {
        return <div className="loader"><MUICircularProgress size={2} /></div>;
    }
}
