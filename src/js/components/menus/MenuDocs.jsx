import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import MenuExamples from './MenuExamples';
import MenuExamplesRaw from '!!raw!./MenuExamples';
import ToggleableMenuExamlples from './ToggleableMenuExamlples';
import ToggleableMenuExamlplesRaw from '!!raw!./ToggleableMenuExamlples';

import Menu from './MenuDocgen.json';
global.Menu = require('react-md/lib/Menus').default; //eslint-disable-line no-undef

const text = `
Menus allow users to take an action by selecting from a list of choices revealed upon opening a temporary, new sheet of material.
`;

export default class MenuDocs extends Component {
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
        text={text}
        sectionName="Menus"
        examples={[{
          name: 'Static Examples',
          code: MenuExamplesRaw,
          children: <MenuExamples />,
        }, {
          name: 'Button Toggleable Menus',
          code: ToggleableMenuExamlplesRaw,
          children: <ToggleableMenuExamlples />,
        }]}
        docgens={Menu}
      />
    );
  }
}
