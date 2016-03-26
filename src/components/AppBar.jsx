import React from 'react';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import MUIAppBar from 'material-ui/lib/app-bar';

export default class AppBar extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        toggleNav: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <MUIAppBar
                title="Discogs Client"
                onLeftIconButtonTouchTap={this.props.toggleNav}
            />
        );
    }
}
