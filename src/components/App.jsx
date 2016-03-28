import React from 'react';

import AppBar from '../containers/AppBar';
import LeftNav from '../containers/LeftNav';
import Loader from '../containers/Loader';
import ReleaseDialog from '../containers/ReleaseDialog';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node.isRequired,
        currentRelease: React.PropTypes.number,
        loading: React.PropTypes.bool
    }

    render() {
        let loader = null;
        let content = null;

        if (this.props.loading) {
            loader = <Loader />;
        } else {
            content = this.props.children;
        }

        return (
            <div>
                <AppBar />
                <LeftNav />
                {content}
                {loader}
                <ReleaseDialog />
            </div>
        );
    }
}
