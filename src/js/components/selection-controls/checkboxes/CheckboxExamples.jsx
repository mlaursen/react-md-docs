import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox } from 'react-md/lib/SelectionControls';
import FontIcon from 'react-md/lib/FontIcons';

export default class CheckboxExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { checked: false };
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
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
        />
      </div>
    );
  }
}