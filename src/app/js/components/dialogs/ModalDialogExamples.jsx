import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Dialog from 'react-md/lib/Dialogs';
import { RaisedButton } from 'react-md/lib/Buttons';

import { openDialog, closeDialog } from '../../actions/dialogs';
import { MODAL } from '../../constants/dialogs';

@connect(state => ({
  isOpen: state.dialogs.modalOpen,
}), {
  openDialog,
  closeDialog,
})
export default class ModalDialogExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    openDialog: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired,
  };

  openDialog = () => {
    this.props.openDialog(MODAL);
  };

  closeDialog = () => {
    this.props.closeDialog(MODAL);
  };

  render() {
    const { isOpen } = this.props;
    return (
      <div>
        <p>
          A <code>Modal Dialog</code> is a dialog that <b>must</b> be closed by clicking
          one of the actions.
        </p>
        <RaisedButton onClick={this.openDialog} label="Open Modal Dialog" />
        <Dialog
          isOpen={isOpen}
          className="speed-boost"
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
