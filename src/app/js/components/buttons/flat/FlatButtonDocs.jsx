import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FlatButtonExamples from './FlatButtonExamples';
import FlatButtonExamplesRaw from '!!raw!./FlatButtonExamples';

const text = `
A button clearly communicates what action will occur when the user touches it.
It consists of text, an image, or both, designed in accordance with your app’s
color theme.

A flat button is a button made of ink that displays ink reactions on press but
does not lift.

[Material Design Specs](https://www.google.com/design/spec/components/buttons.html#buttons-flat-buttons)
`;

export default class FlatButtonDocs extends Component {
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
        sectionName="Flat Buttons"
        examples={[{
          code: FlatButtonExamplesRaw,
          children: <FlatButtonExamples />,
        }]}
        components={[{
          name: 'Flat Button',
          props: [{
            name: 'label',
            desc: `The text that is displayed on the button.`,
            type: 'string',
          }, {
            name: 'type',
            desc: 'The button type.',
            type: 'string',
            defaultValue: 'button',
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
            desc: `Any children to display in the button. This _should_ probably
            be a \`FontIcon\` to display in the button.`,
            type: 'node',
          }, {
            name: 'iconBefore',
            desc: 'Boolean if the children (icon) should be displayed before the text.',
            type: 'bool',
            defaultValue: true,
          }],
        }]}
      />
    );
  }
}
