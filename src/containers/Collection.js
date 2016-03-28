import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Collection from '../components/Collection';

import { getCollection } from '../selectors';

import * as actions from '../actions';

const mapStateToProps = state => {
    return {
        collection: getCollection(state),
        collectionLoaded: state.get('collectionLoaded')
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
