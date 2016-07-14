import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import FlatButtonExamples from './FlatButtonExamples';
import FlatButtonExamplesRaw from '!!raw!./FlatButtonExamples';

import FlatButton from './FlatButtonDocgen.json';

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
        sectionName="Flat Buttons"
        examples={[{
          code: FlatButtonExamplesRaw,
          children: <FlatButtonExamples />,
        }]}
        docgens={FlatButton}
      />
    );
  }
}
