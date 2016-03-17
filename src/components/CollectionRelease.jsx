import React from 'react';

import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

export class CollectionRelease extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        artist: React.PropTypes.string.isRequired,
        year: React.PropTypes.number.isRequired,
        thumb: React.PropTypes.string
    }

    render() {
        return (
            <TableRow>
                <TableRowColumn>{this.props.id}</TableRowColumn>
                <TableRowColumn>{this.props.title}</TableRowColumn>
                <TableRowColumn>{this.props.artist}</TableRowColumn>
                <TableRowColumn>{this.props.year}</TableRowColumn>
            </TableRow>
        );
    }
}
