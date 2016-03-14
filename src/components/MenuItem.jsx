import React from 'react';
import { Link } from 'react-router';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import MUIMenuItem from 'material-ui/lib/menus/menu-item';
import MUIFontIcon from 'material-ui/lib/font-icon';
import * as MUIColors from 'material-ui/lib/styles/colors';

import * as actionCreators from '../action_creators';

export class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        icon: React.PropTypes.string,
        error: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        children: React.PropTypes.node,
        linkTo: React.PropTypes.string,
        toggleNav: React.PropTypes.func
    }

    render() {
        let rightIcon = null;
        const leftIcon = this.props.icon
            ? <MUIFontIcon
                className="material-icons"
                style={
                    this.props.error
                        ? { color: MUIColors.grey300 }
                        : null
            }>
                {this.props.icon}
            </MUIFontIcon>
            : null;

        if (this.props.error) {
            const iconStyle = {
                color: MUIColors.red500
            };

            rightIcon = (
                <MUIFontIcon className="material-icons" style={iconStyle}>
                    {'error'}
                </MUIFontIcon>
            );
        } else {
            if (this.props.loading) {
                rightIcon = (
                    <MUIFontIcon className="material-icons">
                        {'refresh'}
                    </MUIFontIcon>
                );
            }
        }

        return (
            <MUIMenuItem
                onClick={this.props.error ? null : this.props.toggleNav}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                disabled={this.props.error}
            >
                {
                    this.props.error
                        ? this.props.children
                        : <Link to={this.props.linkTo}>
                            {this.props.children}
                        </Link>
                }
            </MUIMenuItem>
        );
    }
}

function mapStateToProps() { return {}; }

export const MenuItemContainer = connect(
    mapStateToProps,
    actionCreators
)(MenuItem);
