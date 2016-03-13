import React from 'react';

import { AppBarContainer } from './AppBar';
import { LeftNavContainer } from './LeftNav';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node
    }

    render() {
        return (
            <div>
                <AppBarContainer />
                <LeftNavContainer />
                {this.props.children}
            </div>
        );
    }
}
