/**
 * The exports for the library
 */

import React from 'react';

import scroller from './scroller';
import anchor from './anchor';
import AnchorElement from './anchor-element';
import ScrollPanel from './scroll-panel';


function Button(props) {
    return <button {...props} />;
}

function Link(props) {
    // `children` implicitly passed, eslint does not approve.
    return <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content
}

export const AnchorButton = anchor(Button);
export const AnchorLink = anchor(Link);
export { default as AnchorElement } from './anchor-element';
export { default as ScrollPanel } from './scroll-panel';

export default {
    scroller,
    anchor,
    AnchorButton,
    AnchorLink,
    AnchorElement,
    ScrollPanel
};
