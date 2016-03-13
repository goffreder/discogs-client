import React from 'react';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import MUIAppBar from 'material-ui/lib/app-bar';

import * as actionCreators from '../action_creators';

export class AppBar extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        toggleNav: React.PropTypes.func
    }

    _handleLeftIconButtonTouchTap = () => {
        this.props.toggleNav();
    }

    render() {
        return (
            <MUIAppBar
                title="Discogs Client"
                onLeftIconButtonTouchTap={this._handleLeftIconButtonTouchTap}
            />
        );
    }
}

function mapStateToProps() { return {}; }

export const AppBarContainer = connect(
    mapStateToProps,
    actionCreators
)(AppBar);
