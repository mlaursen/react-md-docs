import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SelectField from 'react-md/lib/SelectFields';
import states from '../../constants/states';

export default class SelectFieldButtonExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <SelectField
          label="State"
          menuItems={states}
          itemLabel="abbreviation"
          position={SelectField.Positions.BELOW}
        />
        <SelectField
          position={SelectField.Positions.BELOW}
          menuItems={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />
        <p>
          Make sure to use the select field button version of the select field
          inside of a toolar or a table for correct styling.
        </p>
      </div>
    );
  }
}
