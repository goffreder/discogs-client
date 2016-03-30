import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import LeftNav from '../../src/components/LeftNav';

export default () => {
    const renderer = createRenderer();

    it('renders correctly with no props', () => {
        const cb = () => {};
        renderer.render(<LeftNav toggleNav={cb} />);

        const component = renderer.getRenderOutput();

        expect(component.type.displayName).to.equal('LeftNav');
        expect(component.props.children.length).to.equal(3);
        expect(component.props.children[0].props.children)
            .to.equal('Home');
        expect(component.props.children[1].props.children)
            .to.equal('Collection');
        expect(component.props.children[2].props.children)
            .to.equal('Wantlist');
    });

    it('renders an open LeftNav when open prop is passed as true', () => {
        const cb = () => {};
        renderer.render(<LeftNav toggleNav={cb} open />);

        const component = renderer.getRenderOutput();

        expect(component.props.open).to.be.true;
    });

    it('invokes callback when requestChange event occurs', () => {
        let called = false;
        const callback = () => { called = true; };

        renderer.render(<LeftNav toggleNav={callback} />);

        const component = renderer.getRenderOutput();

        component.props.onRequestChange();

        expect(called).to.be.true;
    });
};
