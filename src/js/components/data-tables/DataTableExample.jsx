import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md/lib/DataTables';

import nutritionFacts from './nutritionFacts';

export default class DataTableExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

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
      <DataTable className="nutrition-table">
        <TableHeader>
          <TableRow>
            <TableColumn>Dessert (100g serving)</TableColumn>
            <TableColumn numeric={true}>Calories</TableColumn>
            <TableColumn numeric={true}>Fat (g)</TableColumn>
            <TableColumn numeric={true}>Carbs (g)</TableColumn>
            <TableColumn numeric={true}>Protein (g)</TableColumn>
            <TableColumn numeric={true}>Sodium (mg)</TableColumn>
            <TableColumn numeric={true}>Calcium (%)</TableColumn>
            <TableColumn numeric={true}>Iron (%)</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facts}
        </TableBody>
      </DataTable>
    );
  }
}
