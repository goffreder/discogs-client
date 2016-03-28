import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

export default class ReleaseDialog extends React.Component {
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
                title="Dialog With Actions"
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
