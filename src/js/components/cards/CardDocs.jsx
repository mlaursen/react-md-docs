import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import CardExamples from './CardExamples';
import CardExamplesRaw from '!!raw!./CardExamples';
import CardListExample from './CardListExample';
import CardListExampleRaw from '!!raw!./CardListExample';

import Card from 'docgen/Card.json';
import CardActionOverlay from 'docgen/CardActionOverlay.json';
import CardActions from 'docgen/CardActions.json';
import CardMedia from 'docgen/CardMedia.json';
import CardText from 'docgen/CardText.json';
import CardTitle from 'docgen/CardTitle.json';

const text = `
A card is a sheet of material that serves as an entry point to more
detailed information. A card could contain a photo, text, and a link
about a single subject.

[Material Design Spec - Cards](https://www.google.com/design/spec/components/cards.html#cards-usage)
`;

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
        docgens={[Card, CardActionOverlay, CardActions, CardMedia, CardText, CardTitle]}
      />
    );
  }
}
