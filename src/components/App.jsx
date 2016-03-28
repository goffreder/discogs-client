import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import AppBar from '../containers/AppBar';
import LeftNav from '../containers/LeftNav';
import Loader from '../containers/Loader';
import ReleaseDialog from '../containers/ReleaseDialog';
import ErrorDialog from '../containers/ErrorDialog';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

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
                <ErrorDialog />
            </div>
        );
    }
}
