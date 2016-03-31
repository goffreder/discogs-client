import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import ReleaseTracklistItem from '../../src/components/ReleaseTracklistItem';

export default () => {
    const renderer = createRenderer();

    it('renders correctly with no props', () => {
        renderer.render(<ReleaseTracklistItem title="Test" />);

        const component = renderer.getRenderOutput();

        expect(component.type.displayName).to.equal('TableRow');
        expect(component.props.children.length).to.equal(3);

        const position = component.props.children[0];

        expect(position.type.displayName).to.equal('TableRowColumn');
        expect(position.props.children).to.be.undefined;

        const title = component.props.children[1];

        expect(title.type.displayName).to.equal('TableRowColumn');
        expect(title.props.children).to.equal('Test');

        const duration = component.props.children[2];

        expect(duration.type.displayName).to.equal('TableRowColumn');
        expect(duration.props.children).to.be.undefined;
    });

    it('renders correctly with position and duration', () => {
        renderer.render(
            <ReleaseTracklistItem position="A1" duration="4:00" title="Test" />
        );

        const component = renderer.getRenderOutput();

        expect(component.type.displayName).to.equal('TableRow');
        expect(component.props.children.length).to.equal(3);

        const position = component.props.children[0];

        expect(position.type.displayName).to.equal('TableRowColumn');
        expect(position.props.children).to.equal('A1');

        const title = component.props.children[1];

        expect(title.type.displayName).to.equal('TableRowColumn');
        expect(title.props.children).to.equal('Test');

        const duration = component.props.children[2];

        expect(duration.type.displayName).to.equal('TableRowColumn');
        expect(duration.props.children).to.equal('4:00');
    });
};
