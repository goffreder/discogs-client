import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import CollectionHeader from '../../src/components/CollectionHeader';

export default () => {
    const renderer = createRenderer();

    it('renders correctly', () => {
        const callback = () => {};

        renderer.render(<CollectionHeader loadCollection={callback} />);

        const component = renderer.getRenderOutput();

        expect(component.type).to.equal('div');
        expect(component.props.children.length).to.equal(2);

        const header = component.props.children[0];
        const button = component.props.children[1];

        expect(header.type).to.equal('h1');
        expect(header.props.children)
            .to.equal('Collection');
        expect(button.type.displayName)
            .to.equal('RaisedButton');
        expect(button.props.label).to.equal('Reload');
    });

    it('invokes callback when reload button is clicked', () => {
        let called = false;
        const callback = () => { called = true; };

        renderer.render(<CollectionHeader loadCollection={callback} />);

        const component = renderer.getRenderOutput();
        const button = component.props.children[1];

        button.props.onClick();

        expect(called).to.be.true;
    });
};
