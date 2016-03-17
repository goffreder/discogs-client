import React from 'react';
import {connect} from 'react-redux';

import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';

import Table from 'material-ui/lib/table/table';
import TableHeader from 'material-ui/lib/table/table-header';
import TableBody from 'material-ui/lib/table/table-body';
import Divider from 'material-ui/lib/divider';

import { CollectionHeader } from './CollectionHeader';
import { CollectionRelease } from './CollectionRelease';

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
        this.props.loadCollection();
    }

    render() {
        const collection = this.props.collection.map((r, k) => {
            return <CollectionRelease key={k} {...r} />;
        });

        return (
            <div className="collection">
                <h1>{'Collection'}</h1>
                <Divider />
                <Table height="600">
                    <TableHeader >
                        <CollectionHeader />
                    </TableHeader>
                    <TableBody>
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
