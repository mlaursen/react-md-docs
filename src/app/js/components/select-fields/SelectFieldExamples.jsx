import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SelectField from 'react-md/lib/SelectFields';
import states from '../../constants/states';

export default class SelectFieldExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  handleChange = (item, event) => { // eslint-disable-line no-unused-vars
    this.setState({ value: item.abbreviation });
  };

  render() {
    return (
      <div>
        <div>
          <SelectField
            label="Select a State"
            menuItems={states}
            itemLabel="name"
            itemValue="abbreviation"
            position={SelectField.Positions.TOP_LEFT}
          />
        </div>
        <div>
          <SelectField
            floatingLabel={true}
            label="State"
            menuItems={states}
            value={this.state.value}
            onChange={this.handleChange}
            itemLabel="abbreviation"
            itemValue="abbreviation"
          />
        </div>
        <div>
          <SelectField
            defaultValue={1}
            menuItems={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          />
        </div>
      </div>
    );
  }
}
