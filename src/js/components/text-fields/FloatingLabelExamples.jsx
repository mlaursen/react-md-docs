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
      <div>
        <div>
          <TextField
            label="Title"
            className="md-title-text-field"
            size={10}
          />
        </div>
        <div>
          <TextField label="Title" lineDirection="center" />
        </div>
        <div>
          <TextField label="Type many letters" lineDirection="right" rows={2} maxRows={4} />
        </div>
        <div>
          <TextField label="Enter your password" type="password" />
        </div>
      </div>
    );
  }
}
