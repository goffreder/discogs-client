import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';

import * as actions from '../actions';

import { getError } from '../selectors';

const mapStateToProps = state => {
    return {
        leftNavOpen: state.get('leftNavOpen'),
        loading: state.get('loading'),
        currentRelease: state.get('currentRelease'),
        error: getError(state)
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
