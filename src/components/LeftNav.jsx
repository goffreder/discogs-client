import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import MUILeftNav from 'material-ui/lib/left-nav';
import { MenuItemContainer } from './MenuItem';

import * as actionCreators from '../actions';

export class LeftNav extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        open: React.PropTypes.bool,
        toggleNav: React.PropTypes.func
    }

    render() {
        return (
            <MUILeftNav
                docked={false}
                open={this.props.open}
                width={200}
                onRequestChange={this.props.toggleNav}
            >
                <MenuItemContainer linkTo="/" icon="home">
                    {'Home'}
                </MenuItemContainer>
                <MenuItemContainer linkTo="/collection" icon="folder">
                    {'Collection'}
                </MenuItemContainer>
                <MenuItemContainer
                    icon="remove_red_eye"
                    linkTo="/wantlist"
                >
                    {'Wantlist'}
                </MenuItemContainer>
                <MenuItemContainer linkTo="/about" icon="info">
                    {'About'}
                </MenuItemContainer>
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
    mapStateToProps,
    actionCreators
)(LeftNav);
