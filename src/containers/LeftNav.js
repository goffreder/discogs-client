import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LeftNav from '../components/LeftNav';

import * as actions from '../actions';

const mapStateToProps = state => {
    return {
        open: state.get('leftNavOpen')
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
