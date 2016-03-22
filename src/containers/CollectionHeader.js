import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CollectionHeader from '../components/CollectionHeader';

import * as actions from '../actions';

const mapStateToProps = () => { return {}; };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CollectionHeader);
