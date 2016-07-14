import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import SimpleDialogExamples from './SimpleDialogExamples';
import SimpleDialogExamplesRaw from '!!raw!./SimpleDialogExamples';
import ModalDialogExamples from './ModalDialogExamples';
import ModalDialogExamplesRaw from '!!raw!./ModalDialogExamples';
import FullPageDialogExamples from './FullPageDialogExamples';
import FullPageDialogExamplesRaw from '!!raw!./FullPageDialogExamples';

import Dialog from './DialogDocgen.json';

const text = `
Dialogs contain text and UI controls focused on a specific task.
They inform users about critical information, require users to
make decisions, or involve multiple tasks.
`;

export default class DialogDocs extends Component {
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
        docgens={Dialog}
      />
    );
  }
}
