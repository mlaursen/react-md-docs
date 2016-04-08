import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md/lib/DataTables';

import nutritionFacts from './nutritionFacts';

export default class DataTableExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      allSelected: false,
    };
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  toggleAllCheckboxes = () => {
    this.setState({ allSelected: !this.state.allSelected });
  };

  render() {
    const facts = nutritionFacts.map(({ name, calories, fat, carbs, protein, sodium, calcium, iron }, key) => {
      return (
        <TableRow key={key}>
          <TableColumn>{name}</TableColumn>
          <TableColumn numeric={true}>{calories}</TableColumn>
          <TableColumn numeric={true}>{fat}</TableColumn>
          <TableColumn numeric={true}>{carbs}</TableColumn>
          <TableColumn numeric={true}>{protein}</TableColumn>
          <TableColumn numeric={true}>{sodium}</TableColumn>
          <TableColumn numeric={true}>{calcium}%</TableColumn>
          <TableColumn numeric={true}>{iron}%</TableColumn>
        </TableRow>
      );
    });

    return (
      <DataTable>
        <TableHeader>
          <TableRow>
            <TableColumn header={true} grow={true}>Dessert (100g serving)</TableColumn>
            <TableColumn header={true} numeric={true}>Calories</TableColumn>
            <TableColumn header={true} numeric={true}>Fat (g)</TableColumn>
            <TableColumn header={true} numeric={true}>Carbs (g)</TableColumn>
            <TableColumn header={true} numeric={true}>Protein (g)</TableColumn>
            <TableColumn header={true} numeric={true}>Sodium (mg)</TableColumn>
            <TableColumn header={true} numeric={true}>Calcium (%)</TableColumn>
            <TableColumn header={true} numeric={true}>Iron (%)</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facts}
        </TableBody>
      </DataTable>
    );
  }
}
