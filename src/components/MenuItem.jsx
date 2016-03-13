import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import MUIMenuItem from 'material-ui/lib/menus/menu-item';
import MUIFontIcon from 'material-ui/lib/font-icon';
import * as MUIColors from 'material-ui/lib/styles/colors';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        error: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        children: React.PropTypes.node
    }

    render() {
        let rightIcon = null;

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
                        {'warning'}
                    </MUIFontIcon>
                );
            }
        }

        return (
            <MUIMenuItem rightIcon={rightIcon} disabled={this.props.error}>
                {this.props.children}
            </MUIMenuItem>
        );
    }
}
