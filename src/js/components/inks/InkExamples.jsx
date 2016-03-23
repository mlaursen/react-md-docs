import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Ink from 'react-md/lib/Inks';

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
        <Ink>
          <div className="terribly-inaccessible-fake-button">Click Me!</div>
        </Ink>
        <Ink disabled={true}>
          <div className="terribly-inaccessible-fake-button disabled">Click Me!</div>
        </Ink>
      </div>
    );
  }
}
