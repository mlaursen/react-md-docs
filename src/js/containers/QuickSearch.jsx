import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import TextField from 'react-md/lib/TextFields';
import { TAB } from 'react-md/lib/constants/keyCodes';

import { searchForComponent, startQuickSearching, stopQuickSearching } from '../actions/docs';

@connect(state => ({
  matches: state.docs.matches,
}), { searchForComponent, startQuickSearching, stopQuickSearching })
export default class QuickSearch extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    matches: PropTypes.array.isRequired,
    searchForComponent: PropTypes.func.isRequired,
    startQuickSearching: PropTypes.func.isRequired,
    stopQuickSearching: PropTypes.func.isRequired,
  };

  handleKeyDown = (e) => {
    const isTab = (e.which || e.keyCode) === TAB;
    if((e.shiftKey && isTab) || (isTab && !this.props.matches.length)) {
      this.props.stopQuickSearching();
    }
  };

  render() {
    const { startQuickSearching, searchForComponent } = this.props;
    return (
      <TextField
        label="Quick Search..."
        fullWidth={true}
        onFocus={startQuickSearching}
        onKeyDown={this.handleKeyDown}
        onChange={searchForComponent}
        className="quick-search"
      />
    );
  }
}
