import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import AppBar from '../../src/components/AppBar';

export default () => {
    const renderer = createRenderer();

    it('renders correctly', () => {
        const callback = () => {};
        renderer.render(<AppBar toggleNav={callback} />);

        const component = renderer.getRenderOutput();

        expect(component.type.displayName).to.equal('AppBar');
        expect(component.props.title).to.equal('Discogs Client');
    });

    it('invokes callback when left icon button is clicked', () => {
        let called = false;
        const callback = () => { called = true; };

        renderer.render(<AppBar toggleNav={callback} />);
        renderer.getRenderOutput().props.onLeftIconButtonTouchTap();

        expect(called).to.true;
    });
};
