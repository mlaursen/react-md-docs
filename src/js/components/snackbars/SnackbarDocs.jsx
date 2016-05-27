import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SnackbarExamples from './SnackbarExamples';
import SnackbarExamplesRaw from '!!raw!./SnackbarExamples';
import MobileFabExample from './MobileFabExample';
import MobileFabExampleRaw from '!!raw!./MobileFabExample';

import Snackbar from 'docgen/Snackbar.json';

const text = `
Snackbars provide lightweight feedback about an operation by showing a brief message
at the bottom of the screen. Snackbars can contain an action.

The most effective way to use the \`Snackbar\` component is to have a global
snackbar that gets toasts pushed to it through some state framework (such as
Redux).
`;

export default class SnackbarDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Snackbars"
        examples={[{
          name: 'Simple Example',
          code: SnackbarExamplesRaw,
          children: <SnackbarExamples />,
        }, {
          name: 'Mobile Example with FAB',
          code: MobileFabExampleRaw,
          children: <MobileFabExample />,
        }]}
        docgens={[Snackbar]}
      />
    );
  }
}
