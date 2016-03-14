import React from 'react';
import { Link } from 'react-router';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import MUIMenuItem from 'material-ui/lib/menus/menu-item';
import MUIFontIcon from 'material-ui/lib/font-icon';

import * as actionCreators from '../actions';

export class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        icon: React.PropTypes.string,
        children: React.PropTypes.node,
        linkTo: React.PropTypes.string,
        toggleNav: React.PropTypes.func
    }

    render() {
        const leftIcon = this.props.icon
            ? <MUIFontIcon className="material-icons">
                {this.props.icon}
            </MUIFontIcon>
            : null;

        const menuItem = (
            <MUIMenuItem onClick={this.props.toggleNav} leftIcon={leftIcon}>
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
