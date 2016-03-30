import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import App from '../../src/components/App';

export default () => {
    const renderer = createRenderer();

    it('renders correctly with no props and no children', () => {
        const cb = () => {};
        const app = <App toggleNav={cb} closeError={cb}><div /></App>;

        renderer.render(app);

        const component = renderer.getRenderOutput();

        expect(component.type).to.equal('div');
        expect(component.props.children[0].type.name).to.equal('AppBar');
        expect(component.props.children[1].type.name).to.equal('LeftNav');
    });

    it('renders children correctly', () => {
        const cb = () => {};
        const app = <App toggleNav={cb} closeError={cb}><div /></App>;

        renderer.render(app);

        const component = renderer.getRenderOutput();

        expect(component.props.children[2].type).to.equal('div');
    });

    it('renders the loader if relative prop is passed', () => {
        const cb = () => {};
        const app = <App toggleNav={cb} closeError={cb} loading><div /></App>;

        renderer.render(app);

        const component = renderer.getRenderOutput();

        expect(component.props.children[3].type.name).to.equal('Loader');
    });

    it('renders the release dialog if a current release is set', () => {
        const cb = () => {};
        const app = (<App toggleNav={cb} closeError={cb} currentRelease={1}>
            <div />
        </App>);

        renderer.render(app);

        const component = renderer.getRenderOutput();

        expect(component.props.children[4].type.displayName)
            .to.equal('Connect(ReleaseDialog)');
    });
};
