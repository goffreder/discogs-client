import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/lib/raised-button';
import NavigationRefresh from 'material-ui/lib/svg-icons/navigation/refresh';
import { red500 } from 'material-ui/lib/styles/colors';

import * as actionCreators from '../actions';

export class CollectionHeader extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        loadCollection: React.PropTypes.func
    }

    _handleClick = () => {
        this.props.loadCollection();
    }

    render() {
        return (
            <div className="collection-header">
                <h1 style={{ paddingBottom: 0 }}>{'Collection'}</h1>
                <RaisedButton
                    label="Reload"
                    icon={<NavigationRefresh color={red500} />}
                    onClick={this._handleClick}
                />
            </div>
        );
    }
}

export const CollectionHeaderContainer = connect(
    () => { return {}; },
    actionCreators
)(CollectionHeader);
