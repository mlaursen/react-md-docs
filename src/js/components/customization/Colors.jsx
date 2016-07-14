import React, { Component } from 'react';
import Markdown from '../../containers/Markdown';
import ColorPalette from '../../containers/ColorPalette';

import markdown from './Colors.md';

export default class Colors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container text-container">
        <Markdown markdown={markdown} />
        <ColorPalette />
      </div>
    );
  }
}
