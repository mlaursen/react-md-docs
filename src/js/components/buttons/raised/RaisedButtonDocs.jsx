import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import RaisedButtonExamples from './RaisedButtonExamples';
import RaisedButtonExamplesRaw from '!!raw!./RaisedButtonExamples';

const text = `
A button clearly communicates what action will occur when the user touches it.
It consists of text, an image, or both, designed in accordance with your app’s
color theme.

Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.

[Material Design Specs](https://www.google.com/design/spec/components/buttons.html#buttons-raised-buttons)
`;

export default class RaisedButtonDocs extends Component {
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
        sectionName="Raised Buttons"
        examples={[{
          code: RaisedButtonExamplesRaw,
          children: <RaisedButtonExamples />,
        }]}
        components={[{
          name: 'Raised Button',
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
