import React from 'react';
import { connect } from 'react-redux';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import Table from 'material-ui/lib/table/table';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableBody from 'material-ui/lib/table/table-body';
import Divider from 'material-ui/lib/divider';

import { CollectionHeaderContainer } from './CollectionHeader';

import { getCollection } from '../selectors';

import * as actionCreators from '../actions';

export class Collection extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        loadCollection: React.PropTypes.func.isRequired,
        collection: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            artist: React.PropTypes.string.isRequired,
            year: React.PropTypes.number.isRequired,
            thumb: React.PropTypes.string
        }))
    }

    static defaultProps = {
        collection: []
    }

    componentDidMount() {
        if (!this.props.collection.length) {
            this.props.loadCollection();
        }
    }

    render() {
        const collection = this.props.collection.map((r, k) => {
            return (
                <TableRow key={k}>
                    <TableRowColumn>{r.id}</TableRowColumn>
                    <TableRowColumn>{r.title}</TableRowColumn>
                    <TableRowColumn>{r.artist}</TableRowColumn>
                    <TableRowColumn>{r.year}</TableRowColumn>
                </TableRow>
            );
        });

        return (
            <div className="collection">
                <CollectionHeaderContainer />
                <Divider />
                <Table height="600" selectable={false}>
                    <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>{'ID'}</TableHeaderColumn>
                            <TableHeaderColumn>{'Title'}</TableHeaderColumn>
                            <TableHeaderColumn>{'Artist'}</TableHeaderColumn>
                            <TableHeaderColumn>{'Year'}</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {collection}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        collection: getCollection(state)
    };
};

export const CollectionContainer = connect(
    mapStateToProps,
    actionCreators
)(Collection);
