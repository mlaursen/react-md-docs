import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import IconButtonExamples from './IconButtonExamples';
import IconButtonExamplesRaw from '!!raw!./IconButtonExamples';

import IconButton from '!!json!docgen/IconButton.json';

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
        docgens={[IconButton]}
      />
    );
  }
}
