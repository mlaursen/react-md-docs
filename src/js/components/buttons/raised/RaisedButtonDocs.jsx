import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import RaisedButtonExamples from './RaisedButtonExamples';
import RaisedButtonExamplesRaw from '!!raw!./RaisedButtonExamples';

import RaisedButton from './RaisedButtonDocgen.json';

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
        docgens={RaisedButton}
      />
    );
  }
}
