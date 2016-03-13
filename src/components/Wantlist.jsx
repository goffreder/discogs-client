import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

export class Wantlist extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render() {
        return <div>{'Wantlist'}</div>;
    }
}
