import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import about from './NavigationDrawers.md';
import AppRaw from '!!raw!../../containers/App';
import NavigationDrawerDemo from './NavigationDrawerDemo';
import NewPageDemo from './NewPageDemo';
import NewPageDemoRaw from '!!raw!./NewPageDemo';

import NavigationDrawerDocgen from './NavigationDrawerDocgen.json';

export default class NavigationDrawerDocs extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={about}
        sectionName="Navigation Drawers"
        examples={[{
          name: 'NavigationDrawer Demo',
          code: NewPageDemoRaw,
          children: <NewPageDemo />,
        }, {
          name: 'About Navigation Drawers',
          code: AppRaw,
          children: <NavigationDrawerDemo />,
        }]}
        docgens={NavigationDrawerDocgen}
      />
    );
  }
}
