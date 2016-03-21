import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Dialog from 'react-md/lib/Dialogs';
import { RaisedButton } from 'react-md/lib/Buttons';
import { List, ListItem } from 'react-md/lib/Lists';

import { openDialog, closeDialog } from '../../actions/dialogs';
import { SIMPLE } from '../../constants/dialogs';

@connect(state => ({
  isOpen: state.dialogs.simpleOpen,
}), {
  openDialog,
  closeDialog,
})
export default class SimpleDialogExamples extends Component {
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
    this.props.openDialog(SIMPLE);
  };

  closeDialog = () => {
    this.props.closeDialog(SIMPLE);
  };

  handleItemClick = () => {
    // close after ripple for fun..
    setTimeout(() => {
      this.closeDialog();
    }, 300);
  };

  render() {
    const { isOpen } = this.props;

    const items = [
      'Single line text goes here',
      'Two line wrapped text goes here making it wrap to next line',
      'Single line text goes here',
      'Three line wrapped text goes here making it wrap to the next line and continues longer to be here',
    ].map((primaryText, i) => (
      <ListItem key={i} onClick={this.handleItemClick} primaryText={primaryText} />
    ));
    return (
      <div>
        <p>
          A <code>Simple Dialog</code> will be rendered if there are no actions given
          to this component. A simple dialog usually consists of list items
          that a user must select. These can be scrollable. This dialog can
          be closed by clicking the overlay or one of the actions.
        </p>
        <RaisedButton label="Open Simple Dialog" onClick={this.openDialog} />
        <Dialog
          isOpen={isOpen}
          title="Simple Title"
          close={this.closeDialog}
          style={{ maxWidth: 320 }}
        >
          <List>
            {items}
          </List>
        </Dialog>
      </div>
    );
  }
}
