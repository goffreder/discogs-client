import React from 'react';
import { connect } from 'react-redux';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import * as actionCreators from '../actions';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        loadCollection: React.PropTypes.func
    }

    render() {
        return (
            <div>
                <button onClick={this.props.loadCollection}>
                    {'Load collection'}
                </button>
            </div>
        );
    }
}

function mapStateToProps() { return {}; }

export const MainContainer = connect(
    mapStateToProps,
    actionCreators
)(Main);
