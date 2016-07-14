import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';
import Fuse from 'fuse.js';

import Autocomplete from 'react-md/lib/Autocompletes';

const data = [
  { name: 'Apple pie', origin: 'Europe' },
  { name: 'Apple strudel', origin: 'Central Europe' },
  { name: 'Bear claw', origin: 'United States' },
  { name: 'Berliner', origin: 'Germany' },
  { name: 'Cannoli', origin: 'Italy' },
  { name: 'Croissant', origin: 'France' },
  { name: 'Kringle', origin: 'Scandinavia' },
  { name: 'Schneeball', origin: 'Germany' },
  { name: 'Schuxen', origin: 'Germany' },
  { name: 'Viennoiserie', origin: 'France' },
];

const dataFuse = new Fuse(data, {
  keys: [{ name: 'name', weight: 1 }],
});

function filter(hayStack, filterText) {
  return dataFuse.search(filterText);
}

export default class StatefulExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="block-text-field-examples">
        <Autocomplete data={data} label="Pastries" dataLabel="name" filter={filter} />
        <Autocomplete data={data} label="Pastries" dataLabel="name" block />
        <Autocomplete data={data} label="Pastries" dataLabel="name" floatingLabel={false} />
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
