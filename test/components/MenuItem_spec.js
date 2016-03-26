import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import MenuItem from '../../src/components/MenuItem';

export default () => {
    const renderer = createRenderer();

    it('renders correctly with no props', () => {
        renderer.render(<MenuItem>{'Test item'}</MenuItem>);

        const component = renderer.getRenderOutput();
        const innerItem = component.props.children;

        expect(component.type.displayName).to.equal('Link');
        expect(innerItem.type.displayName)
            .to.equal('MenuItem');
        expect(innerItem.props.children).to.equal('Test item');
    });

    it('renders correctly with an icon', () => {
        renderer.render(<MenuItem icon={'icon'}>{'Test item'}</MenuItem>);

        const component = renderer.getRenderOutput();
        const innerItem = component.props.children;

        expect(innerItem.props.leftIcon).to.equal('icon');
    });

    it('invokes callback when item is clicked', () => {
        let called = false;
        const callback = () => { called = true; };
        renderer.render(
            <MenuItem toggleNav={callback}>{'Test item'}</MenuItem>
        );

        const component = renderer.getRenderOutput();
        const innerItem = component.props.children;

        innerItem.props.onClick();

        expect(called).to.be.true;
    });
};
