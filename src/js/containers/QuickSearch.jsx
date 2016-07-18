import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import Autocomplete from 'react-md/lib/Autocompletes';

import { searchForComponent } from '../actions/docs';
import { showOverlay, hideOverlay } from '../actions/ui';

@connect(state => ({
  matches: state.docs.matches,
}), { searchForComponent, showOverlay, hideOverlay })
export default class QuickSearch extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    matches: PropTypes.array.isRequired,
    searchForComponent: PropTypes.func.isRequired,
    showOverlay: PropTypes.func.isRequired,
    hideOverlay: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      matches,
      showOverlay,
      hideOverlay,
      searchForComponent,
    } = this.props;

    return (
      <Autocomplete
        label="Quick Search..."
        block
        fullWidth
        data={matches}
        onChange={searchForComponent}
        filter={null}
        className="quick-search"
        listClassName="quick-search-menu"
        containerClassName="quick-search-menu-container"
        onBlur={hideOverlay}
        onMenuOpen={showOverlay}
        onAutocomplete={hideOverlay}
      />
    );
  }
}
