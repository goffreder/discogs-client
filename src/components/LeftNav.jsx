import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import MUILeftNav from 'material-ui/lib/left-nav';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ImageRemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

import MenuItem from '../containers/MenuItem';

export default class LeftNav extends React.Component {
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
                <MenuItem linkTo="/" icon={<ActionHome />}>
                    {'Home'}
                </MenuItem>
                <MenuItem linkTo="/collection" icon={<FileFolder />}>
                    {'Collection'}
                </MenuItem>
                <MenuItem
                    icon={<ImageRemoveRedEye />}
                    linkTo="/wantlist"
                >
                    {'Wantlist'}
                </MenuItem>
            </MUILeftNav>
        );
    }
}
