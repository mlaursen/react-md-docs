import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import IconButtonExamples from './IconButtonExamples';
import IconButtonExamplesRaw from '!!raw!./IconButtonExamples';

const text = `
An icon button is just a simple wrapper of a \`FontIcon\` inside of a button.
`;

export default class IconButtonDocs extends Component {
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
        sectionName="Icon Buttons"
        examples={[{
          code: IconButtonExamplesRaw,
          children: <IconButtonExamples />,
        }]}
        components={[{
          name: 'Icon Button',
          props: [{
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
        }]}
      />
    );
  }
}
