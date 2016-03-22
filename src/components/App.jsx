import React from 'react';

import AppBar from '../containers/AppBar';
import LeftNav from '../containers/LeftNav';
import Loader from '../containers/Loader';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        loading: React.PropTypes.bool
    }

    render() {
        const loader = this.props.loading ? <Loader /> : null;

        return (
            <div>
                <AppBar />
                <LeftNav />
                {this.props.children}
                {loader}
            </div>
        );
    }
}
