import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextField from 'react-md/lib/TextFields';

export default class FloatingLabelExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="block-text-field-examples">
        <TextField
          label="Title"
          placeholder="Hello World"
          className="md-title-text-field"
          size={10}
        />
        <TextField label="Title" lineDirection="center" />
        <TextField label="Type many letters" lineDirection="right" rows={2} maxRows={4} />
        <TextField label="Enter your password" type="password" />
      </div>
    );
  }
}
