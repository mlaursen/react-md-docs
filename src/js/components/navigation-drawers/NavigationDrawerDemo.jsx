import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import SelectField from 'react-md/lib/SelectFields';
import { connect } from 'react-redux';

import Markdown from '../../containers/Markdown';
import { updateDrawerType } from '../../actions/ui';
const DrawerType = NavigationDrawer.DrawerType;

const menuItems = [{
  label: 'Full Height',
  value: DrawerType.FULL_HEIGHT,
}, {
  label: 'Clipped',
  value: DrawerType.CLIPPED,
}, {
  label: 'Floating',
  value: DrawerType.FLOATING,
}, {
  label: 'Persistent',
  value: DrawerType.PERSISTENT,
}, {
  label: 'Persistent Mini',
  value: DrawerType.PERSISTENT_MINI,
}, {
  label: 'Temporary',
  value: DrawerType.TEMPORARY,
}, {
  label: 'Temporary Mini',
  value: DrawerType.TEMPORARY_MINI,
}];

const markdown = `
You can try toggling the different types of Drawer Types with the main
layout of this documentation site. When you leave this page, the Drawer
Type will be set back to \`FULL_HEIGHT\`. If you are on mobile,
you can only view the difference with a mini version. or switching to
persistent.

> Please note: Nested list items will look incorrect in the mini versions
> of the navigaiton drawer.
`;

@connect(state => ({ drawerType: state.ui.drawerType }), {
  updateDrawerType,
})
export default class NavigationDrawerDemo extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    drawerType: PropTypes.string.isRequired,
    updateDrawerType: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    this.props.updateDrawerType(DrawerType.FULL_HEIGHT);
  }

  toLabel = (drawerType) => {
    for(let item of menuItems) {
      if(item.value === drawerType) {
        return item.label;
      }
    }
    return DrawerType.FULL_HEIGHT;
  };

  render() {
    const { drawerType, updateDrawerType } = this.props;
    return (
      <div>
        <Markdown markdown={markdown} />
        <SelectField
          value={this.toLabel(drawerType)}
          onChange={(item) => updateDrawerType(item.value)}
          menuItems={menuItems}
        />
      </div>
    );
  }
}
