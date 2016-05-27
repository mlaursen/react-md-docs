import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import about from './NavigationDrawers.md';
import AppRaw from '!!raw!../../containers/App';
import NavigationDrawerDemo from './NavigationDrawerDemo';
import NewPageDemo from './NewPageDemo';
import NewPageDemoRaw from '!!raw!./NewPageDemo';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavigationDrawerDocgen from 'docgen/NavigationDrawer.json';
global.NavigationDrawer = NavigationDrawer;

export default class NavigationDrawerDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
        docgens={[NavigationDrawerDocgen]}
      />
    );
  }
}
