import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { expect } from 'chai';

import Loader from '../../src/components/Loader';

export default () => {
    const renderer = createRenderer();

    it('renders correctly', () => {
        renderer.render(<Loader />);

        const component = renderer.getRenderOutput();

        expect(component.type).to.equal('div');
        expect(component.props.className).to.equal('loader');
        expect(component.props.children.type.displayName)
            .to.equal('CircularProgress');
    });
};
