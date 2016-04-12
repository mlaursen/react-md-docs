import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import TextField from 'react-md/lib/TextFields';

import { searchForComponent, startQuickSearching } from '../actions/docs';

@connect(() => ({}), { searchForComponent, startQuickSearching })
export default class QuickSearch extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    searchForComponent: PropTypes.func.isRequired,
    startQuickSearching: PropTypes.func.isRequired,
  };

  render() {
    const { startQuickSearching, searchForComponent } = this.props;
    return (
      <TextField
        label="Quick Search..."
        fullWidth={true}
        onFocus={startQuickSearching}
        onChange={searchForComponent}
        className="quick-search"
      />
    );
  }
}
