import { connect } from 'react-redux';
import App from '../components/App';

import { getError } from '../selectors';

const mapStateToProps = state => {
    return {
        loading: state.get('loading'),
        currentRelease: state.get('currentRelease'),
        error: getError(state)
    };
};

const mapDispatchToProps = () => { return {}; };

export default connect(mapStateToProps, mapDispatchToProps)(App);
