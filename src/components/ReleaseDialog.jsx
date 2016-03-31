import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

import ReleaseCard from './ReleaseCard';

export default class ReleaseDialog extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        open: React.PropTypes.bool.isRequired,
        releaseId: React.PropTypes.number,
        releaseData: React.PropTypes.shape({
            artist: React.PropTypes.string,
            title: React.PropTypes.string,
            year: React.PropTypes.number,
            tracklist: React.PropTypes.arrayOf(React.PropTypes.shape({
                position: React.PropTypes.string,
                duration: React.PropTypes.string,
                title: React.PropTypes.string
            }))
        }),
        closeRelease: React.PropTypes.func.isRequired
    }

    render() {
        const actions = [
            /* <FlatButton
                key={1}
                label="Go to release"
                primary
                onTouchTap={this.props.closeRelease}
            />, */
            <FlatButton
                key={0}
                label="Close"
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
                <ReleaseCard />
            </Dialog>
        );
    }
}
