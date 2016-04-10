import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, EditDialogColumn } from 'react-md/lib/DataTables';
import { RadioGroup, Radio, Switch } from 'react-md/lib/SelectionControls';
import FontIcon from 'react-md/lib/FontIcons';
import { sort } from '../../utils';

const movies = [{
  title: 'Conan the Barbarian',
  year: '1982',
}, {
  title: 'Conan the Destroyer',
  year: '1984',
}, {
  title: 'The Terminator',
  year: '1984',
}, {
  title: 'Red Sonja',
  year: '1985',
}, {
  title: 'Commando',
  year: '1985',
}, {
  title: 'Raw Deal',
  year: '1986',
}, {
  title: 'The Running Man',
  year: '1987',
}, {
  title: 'Total Recal',
  year: '1990',
}, {
  title: 'Terminator 2: Judgement Day',
  year: '1991',
}, {
  title: 'Eraser',
  year: '1996',
}, {
  title: 'Jingle All The Way',
  year: '1986',
}, {
  title: 'The 6th Day',
  year: '2000',
}, {
  title: 'Terminator 3: Rise of the Machines',
  year: '2003',
}, {
  title: 'The Last Stand',
  year: '2013',
}, {
  title: 'Terminator Genisys',
  year: '2015',
}];

export default class ComplexDataTableComments extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      large: false,
      sortedMovies: sort(movies, 'title', true).map(movie => ({ ...movie, comment: '' })),
      titleSorted: true,
      yearSorted: null,
    };
  }

  sort = () => {
    const key = typeof this.state.titleSorted === 'boolean' ? 'title' : 'year';
    const sorted = !this.state[key + 'Sorted'];

    this.setState({
      sortedMovies: sort(this.state.sortedMovies, key, sorted),
      [key + 'Sorted']: sorted,
    });
  };

  handleSortTypeChange = (value) => {
    const key = value === 'year' ? 'title' : 'year';
    this.setState({
      [key + 'Sorted']: null,
      [value + 'Sorted']: true,
      sortedMovies: sort(this.state.sortedMovies, value, true),
    });
  };

  handleDialogSizeChange = () => {
    this.setState({ large: !this.state.large });
  };

  handleCommentChange = (index, comment) => {
    const sortedMovies = this.state.sortedMovies.slice();
    sortedMovies[index] = Object.assign({}, sortedMovies[index], { comment });

    this.setState({ sortedMovies });
  };

  render() {
    const { sortedMovies, titleSorted, yearSorted, large } = this.state;
    const rows = sortedMovies.map(({ title, year, comment }, key) => {
      return (
        <TableRow key={key}>
          <TableColumn>{title}</TableColumn>
          <TableColumn numeric={true}>{year}</TableColumn>
          <EditDialogColumn
            label="Add a comment"
            maxLength={140}
            title="Add a comment"
            large={large}
            value={comment}
            onChange={this.handleCommentChange.bind(this, key)}
            onCancelClick={this.handleCommentChange.bind(this, key)}
          />
        </TableRow>
      );
    });

    return (
      <div>
        <div className="table-controls">
          <h3 className="md-title">Table Props</h3>
          <div>
            {/* Set to inline block so the label is a bit shorter so clicking anywhere in the line won't toggle. */}
            <RadioGroup onChange={this.handleSortTypeChange} className="inline-block">
              <Radio value="title" label="Sort by movie title" />
              <Radio value="year" label="Sort by movie year" />
            </RadioGroup>
          </div>
          <div>
            {/* Set to inline flex so the label is a bit shorter so clicking anywhere in the line won't toggle. */}
            <Switch className="inline-flex" label="Use large Edit Dialog" onClick={this.handleDialogSizeChange} />
          </div>
        </div>
        <DataTable className="complex-table">
          <TableHeader>
            <TableRow>
              <TableColumn
                sorted={titleSorted}
                onClick={typeof titleSorted === 'boolean' ? this.sort : null}
                tooltipLabel="The movie's title"
              >
                Title
              </TableColumn>
              <TableColumn
                numeric={true}
                sorted={yearSorted}
                onClick={typeof yearSorted === 'boolean' ? this.sort : null}
                tooltipLabel="The year the movie was released"
              >
                Year
              </TableColumn>
              <TableColumn className="prevent-grow">
                <FontIcon>chat</FontIcon>
                <span className="inline-top">Comments</span>
              </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </DataTable>
      </div>
    );
  }
}
