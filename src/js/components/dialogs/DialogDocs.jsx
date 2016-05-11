import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SimpleDialogExamples from './SimpleDialogExamples';
import SimpleDialogExamplesRaw from '!!raw!./SimpleDialogExamples';
import ModalDialogExamples from './ModalDialogExamples';
import ModalDialogExamplesRaw from '!!raw!./ModalDialogExamples';
import FullPageDialogExamples from './FullPageDialogExamples';
import FullPageDialogExamplesRaw from '!!raw!./FullPageDialogExamples';

import Dialog from '!!json!docgen/DialogContainer.json';
Dialog.component = 'Dialog';

const text = `
Dialogs contain text and UI controls focused on a specific task.
They inform users about critical information, require users to
make decisions, or involve multiple tasks.
`;

export default class DialogDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Dialogs"
        examples={[{
          name: 'Simple Dialog Examples',
          code: SimpleDialogExamplesRaw,
          children: <SimpleDialogExamples />,
        }, {
          name: 'Modal Dialog Examples',
          code: ModalDialogExamplesRaw,
          children: <ModalDialogExamples />,
        }, {
          name: 'Full Page Dialog Examples',
          code: FullPageDialogExamplesRaw,
          children: <FullPageDialogExamples />,
        }]}
        docgens={[Dialog]}
      />
    );
  }
}
