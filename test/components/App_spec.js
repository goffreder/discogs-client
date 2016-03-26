import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import App from '../../src/components/App';

export default () => {
    const renderer = createRenderer();

    it('renders correctly with no props and no children', () => {
        renderer.render(<App />);

        const component = renderer.getRenderOutput();

        expect(component.type).to.equal('div');
        expect(component.props.children.length).to.equal(4);
        expect(component.props.children[0].type.displayName)
            .to.equal('Connect(AppBar)');
        expect(component.props.children[1].type.displayName)
            .to.equal('Connect(LeftNav)');
        expect(component.props.children[2]).to.be.undefined;
        expect(component.props.children[3]).to.be.null;
    });

    it('renders children correctly', () => {
        renderer.render(<App><div /></App>);

        const component = renderer.getRenderOutput();

        expect(component.props.children[2].type).to.equal('div');
    });

    it('renders the loader if relative prop is passed', () => {
        renderer.render(<App loading />);

        const component = renderer.getRenderOutput();

        expect(component.props.children[3].type.displayName)
            .to.equal('Connect(Loader)');
    });
};
