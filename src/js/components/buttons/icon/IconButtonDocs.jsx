import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import IconButtonExamples from './IconButtonExamples';
import IconButtonExamplesRaw from '!!raw!./IconButtonExamples';

import IconButton from './IconButtonDocgen.json';

const text = `
An icon button is just a simple wrapper of a \`FontIcon\` inside of a button.
`;

export default class IconButtonDocs extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

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
        docgens={IconButton}
      />
    );
  }
}
