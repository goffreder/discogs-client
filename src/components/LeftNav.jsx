import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import MUILeftNav from 'material-ui/lib/left-nav';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ImageRemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

import MenuItem from '../components/MenuItem';

export default class LeftNav extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        open: React.PropTypes.bool,
        toggleNav: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <MUILeftNav
                docked={false}
                open={this.props.open}
                width={200}
                onRequestChange={this.props.toggleNav}
            >
                <MenuItem
                    icon={<ActionHome />}
                    linkTo="/"
                    toggleNav={this.props.toggleNav}
                >
                    {'Home'}
                </MenuItem>
                <MenuItem
                    icon={<FileFolder />}
                    linkTo="/collection"
                    toggleNav={this.props.toggleNav}
                >
                    {'Collection'}
                </MenuItem>
                <MenuItem
                    icon={<ImageRemoveRedEye />}
                    linkTo="/wantlist"
                    toggleNav={this.props.toggleNav}
                >
                    {'Wantlist'}
                </MenuItem>
            </MUILeftNav>
        );
    }
}
