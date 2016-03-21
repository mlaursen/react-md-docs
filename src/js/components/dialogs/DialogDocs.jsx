import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SimpleDialogExamples from './SimpleDialogExamples';
import SimpleDialogExamplesRaw from '!!raw!./SimpleDialogExamples';
import ModalDialogExamples from './ModalDialogExamples';
import ModalDialogExamplesRaw from '!!raw!./ModalDialogExamples';
import FullPageDialogExamples from './FullPageDialogExamples';
import FullPageDialogExamplesRaw from '!!raw!./FullPageDialogExamples';

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
        components={[{
          name: 'Dialog',
          props: [{
            name: 'isOpen',
            desc: 'Boolean if the dialog is currently open.',
            type: 'bool',
            required: true,
          }, {
            name: 'close',
            desc: `A function to close the dialog. This is used to close
            the dialog when the overlay is clicked for simple dialogs.`,
            type: 'func',
            required: true,
          }, {
            name: 'title',
            desc: `The optional title to display in the dialog.`,
            type: 'string',
          }, {
            name: 'actions',
            desc: `A list of actions to display in the footer of the dialog.
            This should probably be an array of \`FlatButton\`, or you can
            pass a list of props to generate the list of \`FlatButton\`.`,
            type: 'node || arrayOf(flatButtonProps)',
          }, {
            name: 'actionLeft',
            desc: `The actionable item to display in a full page dialog
            to the left of the title. This will be displayed in a toolbar.`,
            type: 'node',
          }, {
            name: 'actionRight',
            desc: `Any actionable component(s) to display to the right of
            the title in a full page dialog.`,
            type: 'node',
          }, {
            name: 'modal',
            desc: `Boolean if the dialog should act as a modal. This means
            the user must select an action to close the dialog instead of
            clicking the overlay.`,
            type: 'bool',
          }, {
            name: 'pageX',
            desc: `The pageX location to start the animtion for a full page
            dialog appearing.`,
            type: 'number',
          }, {
            name: 'pageY',
            desc: `The pageY location to start the animation for a full page
            dialog appearing.`,
            type: 'number',
          }, {
            name: 'containerClassName',
            desc: `The entire dialog container's className`,
            type: 'string',
          }, {
            name: 'className',
            desc: `The className for the overall dialog component.`,
            type: 'string',
          }, {
            name: 'contentClassName',
            desc: `The className for the dialog's content.`,
            type: 'string',
          }, {
            name: 'transitionName',
            desc: `The transition name for the dialog appearing.`,
            type: 'string',
            defaultValue: 'md-dialog',
          }, {
            name: 'transitionEnter',
            desc: `Boolean if the enter transition should be used.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'transitionEnterTimeout',
            desc: `The timeout for the dialog appearing.`,
            type: 'number',
            defaultValue: 300,
          }, {
            name: 'transitionLeave',
            desc: `Boolean if the leave transition should be used.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'transitionLeaveTimeout',
            desc: `The timeout for the dialog appearing.`,
            type: 'number',
            defaultValue: 300,
          }],
        }]}
      />
    );
  }
}
