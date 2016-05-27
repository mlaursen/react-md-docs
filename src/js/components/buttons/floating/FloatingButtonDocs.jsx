import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FloatingButtonExamples from './FloatingButtonExamples';
import FloatingButtonExamplesRaw from '!!raw!./FloatingButtonExamples';
import SpeedDialExample from './SpeedDialExample';
import SpeedDialExampleRaw from '!!raw!./SpeedDialExample';

import FloatingButton from 'docgen/FloatingButton.json';
import SpeedDial from 'docgen/SpeedDial.json';

const text = `
A button clearly communicates what action will occur when the user touches it.
It consists of text, an image, or both, designed in accordance with your app’s
color theme.


ating action buttons are used for a promoted action. They are distinguished by
a circled icon floating above the UI and have motion behaviors that include
morphing, launching, and a transferring anchor point.

[Material Design Specs](https://www.google.com/design/spec/components/buttons-floating-action-button.html#buttons-floating-action-button-floating-action-button)
`;

export default class FloatingButtonDocs extends Component {
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
        sectionName="Floating Action Buttons - FAB"
        examples={[{
          name: 'Simple Examples',
          code: FloatingButtonExamplesRaw,
          children: <FloatingButtonExamples />,
        }, {
          name: 'Speed Dial Transition',
          code: SpeedDialExampleRaw,
          children: <SpeedDialExample />,
        }]}
        docgens={[FloatingButton, SpeedDial]}
      />
    );
  }
}
