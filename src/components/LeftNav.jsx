import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import MUILeftNav from 'material-ui/lib/left-nav';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ImageRemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

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
                <MenuItemContainer linkTo="/" icon={<ActionHome />}>
                    {'Home'}
                </MenuItemContainer>
                <MenuItemContainer linkTo="/collection" icon={<FileFolder />}>
                    {'Collection'}
                </MenuItemContainer>
                <MenuItemContainer
                    icon={<ImageRemoveRedEye />}
                    linkTo="/wantlist"
                >
                    {'Wantlist'}
                </MenuItemContainer>
                <MenuItemContainer linkTo="/about" icon={<ActionInfo />}>
                    {'About'}
                </MenuItemContainer>
            </MUILeftNav>
        );
    }
}

const mapStateToProps = state => {
    return { open: state.get('leftNavOpen') };
};

export const LeftNavContainer = connect(
    mapStateToProps,
    actionCreators
)(LeftNav);
