import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Markdown from '../../containers/Markdown';
import ColorPalette from '../../containers/ColorPalette';

import markdown from '../../../markdown/Colors';

export default class Colors extends Component {
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
      <div className="container text-container">
        <Markdown markdown={markdown} />
        <ColorPalette />
      </div>
    );
  }
}
