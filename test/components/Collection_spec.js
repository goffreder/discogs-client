import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import {
    createRenderer,
    Simulate,
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

import { expect } from 'chai';

import Collection from '../../src/components/Collection';

export default () => {
    const renderer = createRenderer();

    it('renders correctly with empty collection', () => {
        const callback = () => {};

        renderer.render(
            <Collection
                loadCollection={callback}
                openRelease={callback}
            />
        );

        const component = renderer.getRenderOutput();

        expect(component.type).to.equal('div');
        expect(component.props.className).to.equal('collection');
        expect(component.props.children.length).to.equal(3);
        expect(component.props.children[0].type.displayName)
            .to.equal('Connect(CollectionHeader)');
        expect(component.props.children[1].type.displayName)
            .to.equal('Divider');
        expect(component.props.children[2].type)
            .to.equal('h1');
        expect(component.props.children[2].props.children)
            .to.equal('No items to display');
    });

    it('renders correctly with a collection', () => {
        const collection = [{
            id: 1,
            title: 'Lateralus',
            artist: 'Tool',
            year: 1996
        }];
        const callback = () => {};

        renderer.render(<Collection
            collection={collection}
            loadCollection={callback}
            openRelease={callback}
        />);

        const component = renderer.getRenderOutput();
        const table = component.props.children[2];

        expect(table.type.displayName).to.equal('Griddle');
        expect(table.props.results).to.deep.equal(collection);
    });

    it('invokes callback con componentDidMount', () => {
        const store = createStore(() => {});

        let called = false;
        const callback = () => { called = true; };

        renderIntoDocument(
            <Provider store={store}>
                <Collection loadCollection={callback} openRelease={callback} />
            </Provider>
        );

        expect(called).to.be.true;
    });

    it('invokes callback on row click', () => {
        const store = createStore(() => {});

        let called = false;
        const callback = () => { called = true; };
        const emptyCallback = () => {};
        const collection = [{
            id: 1,
            title: 'Lateralus',
            artist: 'Tool',
            year: 1996
        }];

        const component = renderIntoDocument(
            <Provider store={store}>
                <Collection
                    collection={collection}
                    loadCollection={emptyCallback}
                    openRelease={callback}
                />
            </Provider>
        );

        const td = scryRenderedDOMComponentsWithTag(component, 'td');

        Simulate.click(td[0]);

        expect(called).to.be.true;
    });
};
