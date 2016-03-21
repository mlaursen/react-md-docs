import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Dialog from 'react-md/lib/Dialogs';
import { RaisedButton, IconButton, FlatButton } from 'react-md/lib/Buttons';
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';

import Markdown from '../../containers/Markdown';
import { openDialog, closeDialog } from '../../actions/dialogs';
import { FULL_PAGE } from '../../constants/dialogs';

const markdown = `
A \`Full Page Dialog\` is what it says: a full page dialog.. This
is probably more useful on mobile devices. A full page dialog
is rendered if \`actionLeft\` and \`actionRight\` are given as props.


When opened, the dialog will consist of an app bar with the given \`title\`,
\`actionLeft\`, and \`actionRight\`. Any other content will be rendered in
\`.md-dialog-content\`.
`;

@connect(state => ({
  isOpen: state.dialogs[`${FULL_PAGE}Open`],
  pageX: state.dialogs[`${FULL_PAGE}PageX`],
  pageY: state.dialogs[`${FULL_PAGE}PageY`],
}), {
  openDialog,
  closeDialog,
})
export default class FullPageDialogExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    openDialog: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired,
    pageX: PropTypes.number,
    pageY: PropTypes.number,
  };

  openDialog = (e) => {
    this.props.openDialog(FULL_PAGE, e);
  };

  closeDialog = () => {
    this.props.closeDialog(FULL_PAGE);
  };

  render() {
    const { isOpen, pageX, pageY } = this.props;
    const actionLeft = <IconButton onClick={this.closeDialog}>close</IconButton>;
    const actionRight = <FlatButton label="Save" onClick={this.closeDialog} className="justify-end md-toolbar-item" />;

    return (
      <div>
        <Markdown markdown={markdown} />
        <RaisedButton label="Open full page dialog" onClick={this.openDialog} />
        <Dialog
          isOpen={isOpen}
          pageX={pageX}
          pageY={pageY}
          title="New Event"
          close={this.closeDialog}
          actionLeft={actionLeft}
          actionRight={actionRight}
        >
          <form>
            <TextField
              label="Email"
              defaultValue="heyfromjonathan@gmail.com"
              fullWidth={true}
              floatingLabel={false}
            />
            <Divider />
            <TextField
              label="Event name"
              fullWidth={true}
              floatingLabel={false}
            />
            <Divider />
            <TextField
              placeholder="Description"
              fullWidth={true}
              rows={4}
              maxRows={-1}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}
