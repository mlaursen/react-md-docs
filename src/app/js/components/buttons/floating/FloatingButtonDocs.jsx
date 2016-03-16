import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FloatingButtonExamples from './FloatingButtonExamples';
import FloatingButtonExamplesRaw from '!!raw!./FloatingButtonExamples';
import SpeedDialExample from './SpeedDialExample';
import SpeedDialExampleRaw from '!!raw!./SpeedDialExample';

const text = `
A button clearly communicates what action will occur when the user touches it.
It consists of text, an image, or both, designed in accordance with your app’s
color theme.


ating action buttons are used for a promoted action. They are distinguished by
a circled icon floating above the UI and have motion behaviors that include
morphing, launching, and a transferring anchor point.

[Material Design Specs](https://www.google.com/design/spec/components/buttons-floating-action-button.html#buttons-floating-action-button-floating-action-button)
`;

export default class FloatingButtonDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Floating Action Buttons - FAB"
        examples={[{
          name: 'Simple Examples',
          code: FloatingButtonExamplesRaw,
          children: <FloatingButtonExamples />,
        }, {
          name: 'Speed Dial Transition',
          code: SpeedDialExampleRaw,
          children: <SpeedDialExample />,
        }]}
        components={[{
          name: 'Floating Button',
          props: [{
            name: 'fixed',
            type: 'bool',
            desc: `Boolean if this floating button should be fixed to the bottom
            right of the screen.`,
          }, {
            name: 'mini',
            type: 'bool',
            desc: 'Boolean if this is the mini variant of the floating icon button',
          }, {
            name: 'type',
            desc: 'The button type.',
            type: 'string',
            defaultValue: 'button',
          }, {
            name: 'href',
            desc: 'An optional href to use if you want the button to be a link.',
            type: 'string',
          }, {
            name: 'onClick',
            desc: 'The onClick function for the button.',
            type: 'func',
          }, {
            name: 'disabled',
            desc: 'Boolean if the button is disabled.',
            type: 'bool',
          }, {
            name: 'children',
            desc: `An optional child element that is used in the \`FontIcon\` component
            to render the icon.`,
            type: 'node',
          }, {
            name: 'iconClassName',
            desc: 'The icon className to use in the `FontIcon` component.',
            type: 'string',
          }, {
            name: 'tooltip',
            desc: `An optional tooltip to display on hover or on touch hold.`,
            type: 'string',
          }, {
            name: 'tooltipPosition',
            desc: `The position of the tooltip.`,
            type: `one('top', 'right', 'bottom', 'left')`,
            defaultValue: 'bottom',
          }, {
            name: 'tooltipClassName',
            desc: 'An optional className to apply to the tooltip.',
            type: 'string',
          }],
        }, {
          name: 'Speed Dial',
          others: false,
          props: [{
            name: 'fabs',
            desc: `A list of \`FloatingButton\` or props to generate the \`FloatingButton\` for when
            the SpeedDial is open. They will automatically be converted to the \`mini\` FAB type.`,
            type: 'arrayOf(node || { ...fabProps })',
            required: true,
          }, {
            name: 'isOpen',
            desc: 'An optional boolean if the speed dial is open (and a controlled component)',
            type: 'bool',
          }, {
            name: 'initiallyOpen',
            desc: 'Boolean if the uncontrolled SpeedDial is open by default.',
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'onClick',
            desc: 'A function to call whenever the main FAB is clicked.',
            type: 'func',
          }, {
            name: 'onPassiveClick',
            desc: 'A function to call only when the Speed Dial is not open and the main FAB is clicked.',
            type: 'func',
          }, {
            name: 'onActiveClick',
            desc: 'A function to call only when the Speed Dial is open and the main FAB is clicked.',
            type: 'func',
          }, {
            name: 'passiveIconChildren',
            desc: 'The children to use to display the icon when the Speed Dial is not open.',
            type: 'node',
          }, {
            name: 'passiveIconClassName',
            desc: 'The icon className to use to display the icon when the Speed Dial is not open.',
            type: 'string',
            defaultValue: 'material-icons',
          }, {
            name: 'activeIconChildren',
            desc: 'The children to use to display the icon when the Speed Dial is open.',
            type: 'node',
          }, {
            name: 'activeIconClassName',
            desc: 'The icon className to use to display the icon when the Speed Dial is open.',
            type: 'string',
            defaultValue: 'material-icons',
          }, {
            name: 'containerProps',
            desc: 'Any props that you want to apply to the speed dial component itself instead of the FAB.',
            type: 'object',
          }],
        }]}
      />
    );
  }
}
