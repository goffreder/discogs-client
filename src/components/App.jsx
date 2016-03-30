import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import AppBar from '../components/AppBar';
import LeftNav from '../components/LeftNav';
import Loader from '../components/Loader';
import ReleaseDialog from '../containers/ReleaseDialog';
import ErrorDialog from '../components/ErrorDialog';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        children: React.PropTypes.node.isRequired,
        currentRelease: React.PropTypes.number,
        loading: React.PropTypes.bool,
        error: React.PropTypes.shape({
            message: React.PropTypes.string
        }),
        leftNavOpen: React.PropTypes.bool,
        toggleNav: React.PropTypes.func.isRequired,
        closeError: React.PropTypes.func.isRequired
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
                <AppBar toggleNav={this.props.toggleNav} />
                <LeftNav
                    open={this.props.leftNavOpen}
                    toggleNav={this.props.toggleNav}
                />
                {content}
                {loader}
                <ReleaseDialog />
                <ErrorDialog
                    open={Boolean(this.props.error)}
                    message={this.props.error ? this.props.error.message : ''}
                    closeError={this.props.closeError}
                />
            </div>
        );
    }
}
