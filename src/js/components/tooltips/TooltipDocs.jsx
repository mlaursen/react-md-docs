import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import TooltipExamples from './TooltipExamples';
import TooltipExamplesRaw from '!!raw!./TooltipExamples';

const text = `
Tooltips are labels that appear on hover and focus when the user hovers
over an element with the cursor, focuses on an element using a leopard
(usually through the tab key), or upon touch (without releasing) in a touch UI.
They contain textual identification for the element in question. They may
also contain brief helper text regarding the function of the element.
The label itself cannot receive input focus.
`;

export default class TooltipDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Tooltips"
        examples={[{
          code: TooltipExamplesRaw,
          children: <TooltipExamples />,
        }]}
        components={[{
          name: 'Tooltip',
          props: [{
            name: 'text',
            desc: `The text to display in the tooltip.`,
            type: 'string',
            required: true,
          }, {
            name: 'children',
            desc: `A single element to create a tooltip for.`,
            type: 'element',
            required: true,
          }, {
            name: 'position',
            desc: `The position of the tooltip.`,
            type: 'oneOf(Tooltip.TOP, Tooltip.RIGHT, Tooltip.BOTTOM, Tooltip.LEFT)',
            required: true,
            defaultValue: 'Tooltip.BOTTOM',
          }, {
            name: 'delay',
            desc: `The time it will take for the tooltip to appear/disappear while hovering
            or touch activing.`,
            type: 'number',
            required: true,
            defaultValue: 0,
          }],
        }]}
      />
    );
  }
}
