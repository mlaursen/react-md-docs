import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import CardExamples from './CardExamples';
import CardExamplesRaw from '!!raw!./CardExamples';
import CardListExample from './CardListExample';
import CardListExampleRaw from '!!raw!./CardListExample';

import Card from './CardDocgen.json';

const text = `
A card is a sheet of material that serves as an entry point to more
detailed information. A card could contain a photo, text, and a link
about a single subject.

[Material Design Spec - Cards](https://www.google.com/design/spec/components/cards.html#cards-usage)
`;

export default class CardDocs extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
        docgens={Card}
      />
    );
  }
}
