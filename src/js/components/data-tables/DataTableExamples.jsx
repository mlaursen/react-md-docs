import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DataTable, TableRow, TableHeaderRow, TableHeader, TableData } from 'react-md/lib/DataTables';

import nutritionFacts from './nutritionFacts';

export default class DataTableExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      allChecked: false,
    };
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  toggleAllCheckboxes = () => {
    this.setState({ allChecked: !this.state.allChecked });
  };

  render() {
    const facts = nutritionFacts.map(({ name, calories, fat, carbs, protein, sodium, calcium, iron }, key) => {
      return (
        <TableRow key={key}>
          <TableData>{name}</TableData>
          <TableData numeric adjusted>{calories}</TableData>
          <TableData numeric adjusted>{fat}</TableData>
          <TableData numeric adjusted>{carbs}</TableData>
          <TableData numeric adjusted>{protein}</TableData>
          <TableData numeric adjusted>{sodium}</TableData>
          <TableData numeric adjusted>{calcium}%</TableData>
          <TableData numeric>{iron}%</TableData>
        </TableRow>
      );
    });

    return (
      <DataTable>
        <TableHeaderRow onCheckboxClick={this.toggleAllCheckboxes} allChecked={this.state.allChecked}>
          <TableHeader grow>Dessert (100g serving)</TableHeader>
          <TableHeader numeric adjusted>Calories</TableHeader>
          <TableHeader numeric adjusted>Fat (g)</TableHeader>
          <TableHeader numeric adjusted>Carbs (g)</TableHeader>
          <TableHeader numeric adjusted>Protein (g)</TableHeader>
          <TableHeader numeric adjusted>Sodium (mg)</TableHeader>
          <TableHeader numeric adjusted>Calcium (%)</TableHeader>
          <TableHeader numeric>Iron (%)</TableHeader>
        </TableHeaderRow>
        <tbody>
          {facts}
        </tbody>
      </DataTable>
    );
  }
}
