import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import loremIpsum from 'lorem-ipsum';

import Snackbar from 'react-md/lib/Snackbars';
import { FloatingButton } from 'react-md/lib/Buttons';

import PhoneSize from '../PhoneSize';

export default class MobileFabExample extends Component {
  constructor(props) {
    super(props);

    this.state = { toasts: [], fab: null };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    this.setState({ fab: findDOMNode(this.refs.fab) }); // eslint-disable-line react/no-did-mount-set-state
  }

  addToast = () => {
    const toasts = this.state.toasts.slice();
    toasts.push({
      key: Date.now(),
      text: loremIpsum({ count: 8, units: 'words' }),
      action: 'Ok',
    });

    this.setState({ toasts });
  };

  dismiss = () => {
    const toasts = this.state.toasts.slice();
    toasts.shift();

    this.setState({ toasts });
  };

  render() {
    return (
      <PhoneSize contentClassName="container">
        <p className="md-body-1">
          Click the Floating Action Button to create a lorem ipsum toast.
          When you include a reference to a FAB, it will be moved when a
          toast is created.
        </p>
        <FloatingButton ref="fab" fixed={true} secondary={true} onClick={this.addToast}>add</FloatingButton>
        <Snackbar toasts={this.state.toasts} dismiss={this.dismiss} fab={this.state.fab} />
      </PhoneSize>
    );
  }
}
