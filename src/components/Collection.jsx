import React from 'react';
import { connect } from 'react-redux';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import * as actionCreators from '../actions';

export class Collection extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        loadCollection: React.PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.loadCollection();
    }

    render() {
        return <div>{'Collection'}</div>;
    }
}

export const CollectionContainer = connect(
    () => { return {}; },
    actionCreators
)(Collection);
