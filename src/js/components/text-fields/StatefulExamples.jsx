import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';

export default class StatefulExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <p>Icons can be placed to the left of the text field as well.</p>
        <div>
          <TextField
            label="Phone"
            type="tel"
            icon={<FontIcon>phone</FontIcon>}
            size={10}
          />
        </div>
        <div>
          <TextField
            label="Password"
            floatingLabel={false}
            type="password"
            icon={<FontIcon iconClassName="fa fa-key" />}
          />
        </div>
        <p>
          When a text field is set to required, the label is automatically
          updated to include the '*' icon for floating labels onl.
        </p>
        <div>
          <TextField label="I am required" required />
        </div>
        <div>
          <TextField
            label="Phone *"
            type="tel"
            icon={<FontIcon>phone</FontIcon>}
            size={10}
            floatingLabel={false}
            required
          />
        </div>
        <p>And text fields will be un-interactable when disabled.</p>
        <div>
          <TextField label="Help, I am disabled" disabled />
        </div>
        <div>
          <TextField
            label="Phone"
            type="tel"
            icon={<FontIcon>phone</FontIcon>}
            size={10}
            floatingLabel={false}
            disabled
          />
        </div>
        <div>
          <TextField
            label="Try to type many letters"
            rows={2}
            maxRows={4}
            disabled
          />
        </div>
      </div>
    );
  }
}
