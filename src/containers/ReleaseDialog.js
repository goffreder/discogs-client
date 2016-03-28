import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReleaseDialog from '../components/ReleaseDialog';

import * as actions from '../actions';

const mapStateToProps = state => {
    return {
        open: Boolean(state.get('currentRelease')),
        releaseId: state.get('currentRelease')
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseDialog);
