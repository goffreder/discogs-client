import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
    return { loading: state.get('loading') };
};

const mapDispatchToProps = () => { return {}; };

export default connect(mapStateToProps, mapDispatchToProps)(App);
