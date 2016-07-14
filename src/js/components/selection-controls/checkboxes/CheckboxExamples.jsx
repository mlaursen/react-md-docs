import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Checkbox } from 'react-md/lib/SelectionControls';
import FontIcon from 'react-md/lib/FontIcons';

export default class CheckboxExamples extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleChange = (checked, value, event) => { // eslint-disable-line no-unused-vars
    this.setState({ checked });
  };

  render() {
    return (
      <div className="text-container">
        <h4>Todos</h4>
        <Checkbox
          defaultChecked={true}
          label="Open checkbox documentation page"
        />
        <Checkbox label="Read laterial design specs" />
        <Checkbox label="achieve 100% cross-browser compatibility" disabled />
        <Checkbox
          label="Favorite this!"
          checked={this.state.checked}
          onChange={this.handleChange}
          checkedIcon={<FontIcon>favorite</FontIcon>}
          uncheckedIcon={<FontIcon>favorite_border</FontIcon>}
          value="favorite"
        />
      </div>
    );
  }
}
