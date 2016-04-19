import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dialog from 'react-md/lib/Dialogs';
import { RaisedButton } from 'react-md/lib/Buttons';
import { List, ListItem } from 'react-md/lib/Lists';

export default class SimpleDialogExamples extends Component {
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

  handleItemClick = () => {
    // close after ripple for fun..
    setTimeout(() => {
      this.closeDialog();
    }, 300);
  };

  render() {
    const { isOpen } = this.state;

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
