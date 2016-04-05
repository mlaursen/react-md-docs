import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import injectInk from 'react-md/lib/Inks';

@injectInk
class TerriblyInaccessibleFakeButton extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,

    // Injected from injectInk
    ink: PropTypes.node.isRequired,
    // It is required to pass all these event listeners onto your component to
    // get the full ink effect
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onTouchStart: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired,
    onTouchCancel: PropTypes.func.isRequired,
  };

  render() {
    const { ink, children, ...props } = this.props;
    return (
      <div className={`terribly-inaccessible-fake-button${this.props.disabled ? ' disabled' : ''}`} {...props}>
        {ink}
        {children}
      </div>
    );
  }
}

export default class InkExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <TerriblyInaccessibleFakeButton>Click me!</TerriblyInaccessibleFakeButton>
        <TerriblyInaccessibleFakeButton tabIndex={0}>Keyboard focus me!</TerriblyInaccessibleFakeButton>
        <TerriblyInaccessibleFakeButton disabled={true}>Click me!</TerriblyInaccessibleFakeButton>
      </div>
    );
  }
}
