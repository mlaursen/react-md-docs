import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Dialog from 'react-md/lib/Dialogs';
import { RaisedButton, IconButton } from 'react-md/lib/Buttons';

export default class FullPageDemo extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { isOpen: false, pageX: null, pageY: null };
  }

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  launch = (e) => {
    const { pageX, pageY } = e.changedTouches ? e.changedTouches[0] : e;
    this.setState({ isOpen: true, pageX, pageY });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, pageX, pageY } = this.state;
    const { title, onClick, children } = this.props;
    const close = <IconButton onClick={this.close} className={onClick ? 'md-toolbar-item justify-end' : null}>close</IconButton>;


    return (
      <div>
        <RaisedButton label={'Launch ' + title} onClick={this.launch} />
        <Dialog
          isOpen={isOpen}
          pageX={pageX}
          pageY={pageY}
          title={title}
          close={this.close}
          actionLeft={onClick ? <IconButton onClick={onClick}>menu</IconButton> : close}
          actionRight={onClick ? close : null}
        >
          {children}
        </Dialog>
      </div>
    );
  }
}
