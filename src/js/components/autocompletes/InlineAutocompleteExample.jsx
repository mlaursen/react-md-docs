import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Autocomplete from 'react-md/lib/Autocompletes';
import { RaisedButton } from 'react-md/lib/Buttons';
import pastries from './pastries';

export default class InlineAutocompleteExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h3 className="md-title">Never Gonna Bake You Up</h3>
        <Autocomplete
          label="Specify your pastry"
          data={pastries}
          fullWidth={true}
        />
        <RaisedButton label="Order" type="submit" secondary />
      </form>
    );
  }
}
