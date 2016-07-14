import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Dialog from 'react-md/lib/Dialogs';
import { RaisedButton, IconButton, FlatButton } from 'react-md/lib/Buttons';
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';

import Markdown from '../../containers/Markdown';

const markdown = `
A \`Full Page Dialog\` is what it says: a full page dialog.. This
is probably more useful on mobile devices. A full page dialog
is rendered if \`actionLeft\` and \`actionRight\` are given as props.


When opened, the dialog will consist of an app bar with the given \`title\`,
\`actionLeft\`, and \`actionRight\`. Any other content will be rendered in
\`.md-dialog-content\`.
`;

export default class FullPageDialogExamples extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  openDialog = (e) => {
    const { pageX, pageY } = e.changedTouches ? e.changedTouches[0] : e;
    this.setState({ isOpen: true, pageX, pageY });
  };

  closeDialog = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, pageX, pageY } = this.state;
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
              block={true}
              floatingLabel={false}
            />
            <Divider />
            <TextField
              label="Event name"
              block={true}
              floatingLabel={false}
            />
            <Divider />
            <TextField
              placeholder="Description"
              block={true}
              rows={4}
              maxRows={-1}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}
