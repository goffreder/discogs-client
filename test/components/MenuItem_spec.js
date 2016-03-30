import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import MenuItem from '../../src/components/MenuItem';

export default () => {
    const renderer = createRenderer();

    it('renders correctly with no props', () => {
        const cb = () => {};
        renderer.render(<MenuItem toggleNav={cb}>{'Test item'}</MenuItem>);

        const component = renderer.getRenderOutput();

        expect(component.type.displayName).to.equal('MenuItem');
        expect(component.props.children).to.equal('Test item');
    });

    it('renders correctly with an icon', () => {
        const cb = () => {};
        renderer.render(
            <MenuItem toggleNav={cb} icon={<div />}>{'Test item'}</MenuItem>
        );

        const component = renderer.getRenderOutput();

        expect(component.props.leftIcon.type).to.equal('div');
    });

    it('renders correctly with a linkTo property', () => {
        const cb = () => {};
        renderer.render(
            <MenuItem toggleNav={cb} linkTo="test">{'Test item'}</MenuItem>
        );

        const component = renderer.getRenderOutput();
        const innerItem = component.props.children;

        expect(component.type.displayName).to.equal('Link');
        expect(component.props.to).to.equal('test');
        expect(innerItem.type.displayName)
            .to.equal('MenuItem');
        expect(innerItem.props.children).to.equal('Test item');
    });

    it('invokes callback when item is clicked', () => {
        let called = false;
        const callback = () => { called = true; };
        renderer.render(
            <MenuItem toggleNav={callback}>{'Test item'}</MenuItem>
        );

        const component = renderer.getRenderOutput();

        component.props.onClick();

        expect(called).to.be.true;
    });
};
