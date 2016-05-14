import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Markdown from '../../containers/Markdown';
import markdown from './Contributing.md';

export default class Contributing extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return <Markdown markdown={markdown} className="container text-container" />;
  }
}
