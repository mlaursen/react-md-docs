import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Menu from 'react-md/lib/Menus';
import TextField from 'react-md/lib/TextFields';
import { ListItem } from 'react-md/lib/Lists';
import { TAB } from 'react-md/lib/constants/keyCodes';

import { searchForComponent } from '../actions/docs';
import { showOverlay, hideOverlay } from '../actions/ui';

@connect(state => ({
  matches: state.docs.matches,
  isOverlayVisible: state.ui.isOverlayVisible,
}), { searchForComponent, showOverlay, hideOverlay })
export default class QuickSearch extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    matches: PropTypes.array.isRequired,
    isOverlayVisible: PropTypes.bool.isRequired,
    searchForComponent: PropTypes.func.isRequired,
    showOverlay: PropTypes.func.isRequired,
    hideOverlay: PropTypes.func.isRequired,
  };

  handleKeyDown = (e) => {
    const isTab = (e.which || e.keyCode) === TAB;
    if((e.shiftKey && isTab) || (isTab && !this.props.matches.length)) {
      this.props.hideOverlay();
    }
  };

  render() {
    const { isOverlayVisible, matches, showOverlay, hideOverlay, searchForComponent } = this.props;

    let items;
    if(isOverlayVisible) {
      items = matches.map((props, i) => (
        <ListItem
          tabIndex={0}
          {...props}
          onClick={hideOverlay}
          onKeyDown={i + 1 >= matches.length ? this.handleItemKeyDown : null}
        />
      ));
    }

    return (
      <span>
        <TextField
          label="Quick Search..."
          block={true}
          onFocus={showOverlay}
          onKeyDown={this.handleKeyDown}
          onChange={searchForComponent}
          className="quick-search"
        />
        <Menu
          isOpen={isOverlayVisible && matches.length > 0}
          position={Menu.Positions.TOP_LEFT}
          className="quick-search-menu-container"
          listClassName="quick-search-menu"
        >
          {items}
        </Menu>
      </span>
    );
  }
}
