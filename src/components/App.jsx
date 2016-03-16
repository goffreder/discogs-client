import React from 'react';

import { connect } from 'react-redux';

import { AppBarContainer } from './AppBar';
import { LeftNavContainer } from './LeftNav';
import { Loader } from './Loader';

export class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        loading: React.PropTypes.bool
    }

    render() {
        const loader = this.props.loading ? <Loader /> : null;

        return (
            <div>
                <AppBarContainer />
                <LeftNavContainer />
                {this.props.children}
                {loader}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { loading: state.get('loading') };
};

export const AppContainer = connect(mapStateToProps)(App);
