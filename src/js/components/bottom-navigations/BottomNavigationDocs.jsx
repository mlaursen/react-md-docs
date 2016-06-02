import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FixedBottomNavigationExample from './FixedBottomNavigationExample';
import FixedBottomNavigationExampleRaw from '!!raw!./FixedBottomNavigationExample';
import ShiftingBottomNavigationExample from './ShiftingBottomNavigationExample';
import ShiftingBottomNavigationExampleRaw from '!!raw!./ShiftingBottomNavigationExample';
import BottomNavigation from 'docgen/BottomNavigation.json';

import './_bottom-nav.scss';

const text = `
Tapping on a bottom navigation icon takes you directly to the associated view or refreshes the currently active view.

Bottom navigation is primarily for use on mobile. To achieve a similar effect for desktop, use side navigation.


> The \`BottomNavigation\` should really only be used for mobile devices. The demo below _emulates_ a mobile device
> as an example. You can scroll when hovering it to get view how a \`dynamic\` \`BottomNavigation\` component would
> interact with touch events.
`;

export default class BottomNavigationDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Bottom Navigations"
        examples={[{
          name: 'Fixed Bottom Navigation Example',
          code: FixedBottomNavigationExampleRaw,
          children: <FixedBottomNavigationExample />,
        }, {
          name: 'Shifting Bottom Navigation Example',
          code: ShiftingBottomNavigationExampleRaw,
          children: <ShiftingBottomNavigationExample />,
        }]}
        docgens={[BottomNavigation]}
      />
    );
  }
}
