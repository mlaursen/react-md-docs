import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
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
  }

  static propTypes = {
    matches: PropTypes.array.isRequired,
    isOverlayVisible: PropTypes.bool.isRequired,
    searchForComponent: PropTypes.func.isRequired,
    showOverlay: PropTypes.func.isRequired,
    hideOverlay: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleKeyDown = (e) => {
    if((e.which || e.keyCode) !== TAB) { return; }
    const { target } = e;
    const node = findDOMNode(this);
    const tiles = node.querySelectorAll('.md-list-tile');
    if(target === tiles[tiles.length - 1] || (e.shiftKey && target === node.querySelector('.md-text-field'))) {
      this.props.hideOverlay();
    }
  };

  render() {
    const { isOverlayVisible, matches, showOverlay, hideOverlay, searchForComponent } = this.props;

    let items;
    if(isOverlayVisible) {
      items = matches.map(props => <ListItem {...props} onClick={hideOverlay} />);
    }

    return (
      <Menu
        isOpen={isOverlayVisible && matches.length > 0}
        position={Menu.Positions.TOP_LEFT}
        className="quick-search-menu-container"
        listClassName="quick-search-menu"
        onKeyDown={this.handleKeyDown}
        toggle={
          <TextField
            label="Quick Search..."
            block={true}
            onFocus={showOverlay}
            onChange={searchForComponent}
            className="quick-search"
          />
        }
      >
        {items}
      </Menu>
    );
  }
}
