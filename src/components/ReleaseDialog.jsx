import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

export default class ReleaseDialog extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        open: React.PropTypes.bool.isRequired,
        releaseId: React.PropTypes.number,
        closeRelease: React.PropTypes.func.isRequired
    }

    render() {
        const actions = [
            <FlatButton
                key={1}
                label="Go to release"
                primary
                onTouchTap={this.props.closeRelease}
            />, <FlatButton
                key={0}
                label="Cancel"
                secondary
                onTouchTap={this.props.closeRelease}
            />
        ];

        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.closeRelease}
            >
                {'Watching '}{this.props.releaseId}{' details.'}
            </Dialog>
        );
    }
}
