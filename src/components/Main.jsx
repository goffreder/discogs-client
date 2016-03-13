import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render() {
        return <div>{'Main'}</div>;
    }
}
