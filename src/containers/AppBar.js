import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '../components/AppBar';

import * as actiond from '../actions';

const mapStateToProps = () => { return {}; };

const mapDispatchToProps = dispatch => bindActionCreators(actiond, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
