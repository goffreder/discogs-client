import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

export default class ReleaseTracklistItem extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        position: React.PropTypes.string,
        duration: React.PropTypes.string,
        title: React.PropTypes.string.isRequired
    }

    render() {
        return (
            <TableRow displayBorder={false} >
                <TableRowColumn className="single">
                    {this.props.position}
                </TableRowColumn>
                <TableRowColumn>{this.props.title}</TableRowColumn>
                <TableRowColumn className="single">
                    {this.props.duration}
                </TableRowColumn>
            </TableRow>
        );
    }
}
