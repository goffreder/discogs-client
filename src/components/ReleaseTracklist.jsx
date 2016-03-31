import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';

import ReleaseTracklistItem from './ReleaseTracklistItem';

export default class ReleaseTracklist extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        tracklist: React.PropTypes.arrayOf(React.PropTypes.shape({
            position: React.PropTypes.string,
            duration: React.PropTypes.string,
            title: React.PropTypes.string.isRequired
        })).isRequired
    }

    render() {
        return (
            <div>
                <CardTitle
                    title="Tracklist"
                    subtitle={
                        this.props.tracklist.length === 1
                            ? '1 track'
                            : `${this.props.tracklist.length} tracks`
                    }
                />
                <CardText>
                    <Table className="tracklist" selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            {this.props.tracklist.map((t, k) =>
                                <ReleaseTracklistItem
                                    key={k}
                                    position={t.position}
                                    title={t.title}
                                    duration={t.duration}
                                />
                            )}
                        </TableBody>
                    </Table>
                </CardText>
            </div>
        );
    }
}
