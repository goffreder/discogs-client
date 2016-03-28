import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

export default class ErrorDialog extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        open: React.PropTypes.bool.isRequired,
        closeError: React.PropTypes.func.isRequired
    }

    render() {
        const actions = [
            <FlatButton
                key={0}
                label="Close"
                secondary
                onTouchTap={this.props.closeError}
            />
        ];

        return (
            <Dialog
                title="Error"
                className="error"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.closeError}
            >
                {'Oops! Somewhere, something went wrong!'}
            </Dialog>
        );
    }
}
