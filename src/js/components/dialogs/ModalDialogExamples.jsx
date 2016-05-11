import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dialog from 'react-md/lib/Dialogs';
import { RaisedButton } from 'react-md/lib/Buttons';

export default class ModalDialogExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { isOpen: false };
  }

  openDialog = () => {
    this.setState({ isOpen: true });
  };

  closeDialog = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <p>
          A <code>Modal Dialog</code> is a dialog that <b>must</b> be closed by clicking
          one of the actions.
        </p>
        <RaisedButton onClick={this.openDialog} label="Open Modal Dialog" />
        <Dialog
          isOpen={isOpen}
          dialogClassName="speed-boost"
          contentClassName="speed-boost-content"
          title="Use Google's location service?"
          close={this.closeDialog}
          modal={true}
          actions={[{
            onClick: this.closeDialog,
            primary: true,
            label: 'Turn on speed boost',
          }, {
            onClick: this.closeDialog,
            primary: true,
            label: 'No thanks',
          }]}
        >
          <p>
            Let Google help apps determine location. This means sending anonymouse
            location data to Google, even when no apps are running.
          </p>
        </Dialog>
      </div>
    );
  }
}
