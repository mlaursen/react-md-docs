import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import CardExamples from './CardExamples';
import CardExamplesRaw from '!!raw!./CardExamples';
import CardListExample from './CardListExample';
import CardListExampleRaw from '!!raw!./CardListExample';

const text = `
A card is a sheet of material that serves as an entry point to more
detailed information. A card could contain a photo, text, and a link
about a single subject.

[Material Design Spec - Cards](https://www.google.com/design/spec/components/cards.html#cards-usage)
`;

const expanderProp = {
  name: 'isExpander',
  desc: `Boolean if this component should act as an expander for all components
  below it. This means that it will automatically include the
  expander icon button and be in control of expanding the parts below it.`,
  type: 'bool',
};

export default class CardDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Cards"
        examples={[{
          name: 'Expandable Card Example with Media',
          code: CardExamplesRaw,
          children: <CardExamples />,
        }, {
          name: 'Card List',
          code: CardListExampleRaw,
          children: <CardListExample />,
        }]}
        components={[{
          name: 'Card',
          props: [{
            name: 'children',
            desc: `Children to display in the card. Can be any node.
            But should probably be one of \`CardTitle\`, \`CardText\`,
            \`CardMedia\`, or \`CardActions\`.`,
            type: 'node',
          }, {
            name: 'raise',
            desc: `Boolean if the card should raise on hover for desktop displays.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'isInitialExpanded',
            desc: `Boolean if the cards are initially expanded when the
            card is expandable.`,
            type: 'bool',
            defaultvalue: false,
          }, {
            name: 'isExpanded',
            desc: `Boolean if the card is currently in expanded mode. Any children
            that have the prop \`expandable={true}\` on them will be
            expanded. If this value is not \`undefined\`, the card
            will become a controlled component.`,
            type: 'bool',
          }, {
            name: 'onExpanderClick',
            desc: `The function to call when an expander is clicked.`,
            type: 'func',
          }, {
            name: 'iconClassName',
            desc: `The icon className for the expander to use.`,
            type: 'string',
          }, {
            name: 'iconChildren',
            desc: `Any children used to display the expander icon.`,
            type: 'node',
          }],
        }, {
          name: 'CardTitle',
          props: [{
            name: 'title',
            desc: 'The main title to display.',
            type: 'string',
            required: true,
          }, {
            name: 'subtitle',
            desc: `An optional subtitle to display.`,
            type: 'string',
          }, {
            name: 'avatar',
            desc: `An optional avatar to display to the left of the title.`,
            type: 'node',
          }, expanderProp],
        }, {
          name: 'CardMedia',
          props: [{
            name: 'aspectRatio',
            desc: `The aspect ratio to apply to the card media.`,
            type: `oneOf([CardMedia.aspect.equal, CardMedia.aspect.wide])`,
            defaultValue: 'CardMedia.aspect.wide',
          }, {
            name: 'forceAspect',
            desc: `Boolean if the aspect ratio should be forced. This _should_ probably
            always be true.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'overlay',
            desc: `An optional overlay to display over the media. This _should_ probably
            be a \`CardTitle\`, \`CardActions\`, or \`CardActionOverlay\`.`,
            type: 'node',
          }],
        }, {
          name: 'CardActionOverlay',
          desc: `This is a helper component to wrap a \`CardTitle\` and a \`CardActions\` component
          into a \`CardMedia\` overlay. It might not even be useful.`,
          props: [{
            name: 'title',
            desc: `The optional title to display in the card overlay.`,
            type: 'string',
          }, {
            name: 'subtitle',
            desc: `The optional subtitle to display in the card overlay.`,
            type: 'string',
          }, {
            name: 'children',
            desc: `Any children to display in the card title.`,
            type: 'node',
          }, {
            name: 'actions',
            desc: `A list of actions to map into the \`FlatButton\` component.`,
            type: 'arrayOf({ label: required, ...props })',
          }],
        }, {
          name: 'CardActions',
          props: [{
            name: 'centered',
            desc: 'Boolean if the children should be centered in the action area.',
            type: 'bool',
          }, expanderProp],
        }]}
      />
    );
  }
}
