import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { findIndex } from 'lodash/array';
import Markdown from '../../containers/Markdown';

import Autocomplete from 'react-md/lib/Autocompletes';
import Subheader from 'react-md/lib/Subheaders';

import programmingLanguages from './programmingLanguages';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const markdown = `
The \`data\` prop can be a combination of \`number\`, \`string\`, \`object\`,
or \`React Element\`. The main purpose of this is if you want to be able to
display other elements (like \`Subheaders\`, \`Dividers\`, etc) in the
autocompletion menu. Any \`React Element\` will **not** be included in the
filtering. This is an example of including subheaders in the data.
`;

export default class DataReactMixExample extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  // Filters the programming languages and then injects Subheaders for each letter block.
  _filterAndInjectHeaders = (filterText = '') => {
    if(!filterText) { return []; }

    const filtered = Autocomplete.fuzzyFilter(programmingLanguages, filterText);
    LETTERS.forEach(l => {
      const i = findIndex(filtered, pl => typeof pl.charAt === 'function' && pl.charAt(0).toUpperCase() === l);
      if(i >= 0) {
        filtered.splice(i, 0, <Subheader key={`subheader-${l}`} primary primaryText={l} />);
      }
    });

    return filtered;
  };

  _handleChange = filterText => this.setState({ data: this._filterAndInjectHeaders(filterText) });

  render() {
    return (
      <div>
        <Markdown markdown={markdown} />
        <Autocomplete
          label="Type a programming language"
          data={this.state.data}
          filter={null}
          onChange={this._handleChange}
          fullWidth
          onAutocomplete={this._handleChange}
        />
      </div>
    );
  }
}
