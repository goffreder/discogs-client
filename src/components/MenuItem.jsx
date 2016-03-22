import React from 'react';
import { Link } from 'react-router';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import MUIMenuItem from 'material-ui/lib/menus/menu-item';

import * as actionCreators from '../actions';

export class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        icon: React.PropTypes.element,
        children: React.PropTypes.node,
        linkTo: React.PropTypes.string,
        toggleNav: React.PropTypes.func
    }

    render() {
        const menuItem = (
            <MUIMenuItem
                onClick={this.props.toggleNav}
                leftIcon={this.props.icon}
            >
                {this.props.children}
            </MUIMenuItem>
        );

        return <Link to={this.props.linkTo}>{menuItem}</Link>;
    }
}

function mapStateToProps() { return {}; }

export const MenuItemContainer = connect(
    mapStateToProps,
    actionCreators
)(MenuItem);
