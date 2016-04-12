import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextField from 'react-md/lib/TextFields';

export default class SingleLineExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            label="Title"
            className="md-title-text-field"
            size={10}
            floatingLabel={false}
            lineDirection="right"
          />
        </div>
        <div>
          <TextField label="Title" floatingLabel={false} />
        </div>
        <div>
          <TextField
            label="Type many letters"
            rows={2}
            maxRows={4}
            floatingLabel={false}
          />
        </div>
      </div>
    );
  }
}
