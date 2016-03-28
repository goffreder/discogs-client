import React from 'react';
import { Link } from 'react-router';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import MUIMenuItem from 'material-ui/lib/menus/menu-item';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        icon: React.PropTypes.element,
        children: React.PropTypes.node.isRequired,
        linkTo: React.PropTypes.string,
        toggleNav: React.PropTypes.func
    }

    render() {
        const innerItem = (
            <MUIMenuItem
                onClick={this.props.toggleNav}
                leftIcon={this.props.icon}
            >
                {this.props.children}
            </MUIMenuItem>
        );

        return this.props.linkTo
            ? <Link to={this.props.linkTo}>{innerItem}</Link>
            : innerItem;
    }
}
