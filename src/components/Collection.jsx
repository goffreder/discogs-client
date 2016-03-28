import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import Griddle from 'griddle-react';
import Divider from 'material-ui/lib/divider';

import CollectionHeader from '../containers/CollectionHeader';

export default class Collection extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        collection: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            artist: React.PropTypes.string.isRequired,
            year: React.PropTypes.number.isRequired,
            thumb: React.PropTypes.string
        })),
        loadCollection: React.PropTypes.func.isRequired,
        openRelease: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        collection: []
    }

    componentDidMount() {
        if (!this.props.collection.length) {
            this.props.loadCollection();
        }
    }

    _handleClickRow = data => {
        this.props.openRelease(data.props.data.id);
    }

    render() {
        const content = this.props.collection.length
            ? <Griddle
                results={this.props.collection}
                showFilter
                useGriddleStyles={false}
                resultsPerPage={25}
                initialSort="artist"
                onRowClick={this._handleClickRow}
            />
            : <h1 className="empty-collection">{'No items to display'}</h1>;

        return (
            <div className="collection">
                <CollectionHeader />
                <Divider />
                {content}
            </div>
        );
    }
}
