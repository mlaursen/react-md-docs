import React, { Component } from 'react';

import Markdown from '../../containers/Markdown';
import markdown from './Contributing.md';

export default class Contributing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Markdown markdown={markdown} className="container text-container" />;
  }
}
