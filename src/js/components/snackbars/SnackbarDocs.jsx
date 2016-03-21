import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SnackbarExamples from './SnackbarExamples';
import SnackbarExamplesRaw from '!!raw!./SnackbarExamples';

const text = `
Snackbars provide lightweight feedback about an operation by showing a brief message
at the bottom of the screen. Snackbars can contain an action.

A snackbar takes a queue of toasts and displays them to the user one after
another. They can be auto dismissed, or require user interaction to close the toast.

\`\`\`js
const toast = {
  text: PropTypes.string.isRequired, // text to display
  action: PropTypes.oneOfType([
    PropTypes.string, // automatically calls dismiss onClick
    PropTypes.shape({
      onClick: PropTypes.func.isRequired, // requires manual dimiss call
      label: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  onAppear: PropTypes.func, // optional function to call when toast is active
};
\`\`\`

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
        }]}
        components={[{
          name: 'Snackbar',
          children: false,
          others: false,
          props: [{
            name: 'toasts',
            desc: `This is the queue of toasts to display to the user. If \`autohide\`
            is enabled, the toast will automatically be dismissed after the \`autohideTimeout\`
            time. Otherwise, it will only dismiss once the user selects the action.`,
            type: 'arrayOf({ text, action: { string || btnProps }}, onAppear)',
            required: true,
            defaultValue: '[]',
          }, {
            name: 'autohide',
            desc: `Boolean if the toast should automatically be dismissed after the given
            timeout.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'autohideTimeout',
            desc: `The timeout to wait before auto-dismissing the toast.`,
            type: 'number',
            defaultValue: 3000,
            required: true,
          }, {
            name: 'multiline',
            desc: `Boolean if the toast wraps multiple lines. This should eventually be
            removed and handled automatically.`,
            type: 'bool',
          }, {
            name: 'fabTimeout',
            desc: `The timeout for the Floating Action Button's moving animation when
            a toast appears that would overlap with the FAB.`,
            type: 'number',
            required: true,
            defaultValue: 450,
          }, {
            name: 'className',
            desc: `The className to apply to the active toast.`,
            type: 'string',
          }, {
            name: 'any remaining props',
            desc: 'Any other given props will be passed to the active toast.',
            type: 'any',
          }],
        }]}
      />
    );
  }
}
