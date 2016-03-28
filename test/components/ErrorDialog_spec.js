import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import ErrorDialog from '../../src/components/ErrorDialog';

export default () => {
    const renderer = createRenderer();

    it('renders correctly', () => {
        const callback = () => {};

        renderer.render(<ErrorDialog closeError={callback} />);

        const component = renderer.getRenderOutput();

        expect(component.type.displayName).to.equal('Dialog');
    });

    it('renders the error message', () => {
        const callback = () => {};

        renderer.render(
            <ErrorDialog message="ERROR_MESSAGE" closeError={callback} />
        );

        const component = renderer.getRenderOutput();

        expect(component.type.displayName).to.equal('Dialog');
        expect(JSON.stringify(component)).to.have.string('ERROR_MESSAGE');
    });

    it('invokes callback when close button is clicked', () => {
        let called = false;
        const callback = () => { called = true; };

        renderer.render(<ErrorDialog closeError={callback} />);

        const component = renderer.getRenderOutput();
        const button = component.props.actions[0];

        button.props.onTouchTap();

        expect(called).to.be.true;
    });

    it('invokes callback when a requestClose event occurs', () => {
        let called = false;
        const callback = () => { called = true; };

        renderer.render(<ErrorDialog closeError={callback} />);

        const component = renderer.getRenderOutput();

        component.props.onRequestClose();

        expect(called).to.be.true;
    });
};
