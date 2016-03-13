import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import MUILeftNav from 'material-ui/lib/left-nav';
import MenuItem from './MenuItem';

export class LeftNav extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        open: React.PropTypes.bool
    }

    render() {
        return (
            <MUILeftNav docked={false} open={this.props.open} width={200}>
                <MenuItem loading>{'Collection'}</MenuItem>
                <MenuItem error>{'Wantlist'}</MenuItem>
                <MenuItem>{'About'}</MenuItem>
            </MUILeftNav>
        );
    }
}

function mapStateToProps(state) {
    return {
        open: state.get('leftNavOpen')
    };
}

export const LeftNavContainer = connect(
    mapStateToProps
)(LeftNav);
