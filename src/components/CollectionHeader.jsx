import React from 'react';

import TableRow from 'material-ui/lib/table/table-row';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';

export class CollectionHeader extends React.Component {
    render() {
        return (
            <TableRow>
                <TableHeaderColumn>{'ID'}</TableHeaderColumn>
                <TableHeaderColumn>{'Title'}</TableHeaderColumn>
                <TableHeaderColumn>{'Artist'}</TableHeaderColumn>
                <TableHeaderColumn>{'Year'}</TableHeaderColumn>
            </TableRow>
        );
    }
}
