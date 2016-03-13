import React from 'react';
import { expect } from 'chai';

import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';

import { AppBar } from '../../src/components/AppBar';

describe('AppBar', () => {
    it('invokes callback when navigation menu icon is clicked', () => {
        let leftNavOpen = true;
        const toggleNav = () => { leftNavOpen = false; };
        const component = renderIntoDocument(<AppBar toggleNav={toggleNav} />);

        const navMenuButton = scryRenderedDOMComponentsWithTag(
            component,
            'button'
        )[0];

        Simulate.click(navMenuButton);

        expect(leftNavOpen).to.equal(false);
    });
});
