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
      <div className="block-text-field-examples">
        <p>Icons can be placed to the left of the text field as well.</p>
        <TextField
          label="Phone"
          type="tel"
          icon={<FontIcon>phone</FontIcon>}
          size={10}
        />
        <p>
          When a text field is set to required, the label is automatically
          updated to include the '*' icon for floating labels onl.
        </p>
        <TextField label="I am required" required />
        <TextField
          label="Phone *"
          type="tel"
          icon={<FontIcon>phone</FontIcon>}
          size={10}
          floatingLabel={false}
          required
        />
        <p>And text fields will be un-interactable when disabled.</p>
        <TextField label="Help, I am disabled" disabled />
        <TextField
          label="Phone"
          type="tel"
          icon={<FontIcon>phone</FontIcon>}
          size={10}
          floatingLabel={false}
          disabled
        />
        <TextField
          label="Try to type many letters"
          rows={2}
          maxRows={4}
          disabled
        />
      </div>
    );
  }
}
