import React, { Component } from 'react';
import Paper from 'react-md/lib/Papers';

export default class PaperExamples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const papers = Array.apply(null, new Array(6)).map((_, i) => {
      return <Paper key={i} zDepth={i} className="paper-example">zDepth = {i}</Paper>;
    });

    return (
      <div className="paper-container">
        {papers}
      </div>
    );
  }
}
