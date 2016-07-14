import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import SelectField from 'react-md/lib/SelectFields';

import { updateTheme } from '../actions/ui';
import themes from '../constants/themes';

@connect(state => ({ theme: state.ui.theme }), {
  updateTheme,
})
export default class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    theme: PropTypes.string,
    updateTheme: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { theme, updateTheme } = this.props;
    return (
      <SelectField
        label="Theme"
        className="theme-switcher"
        value={theme}
        onChange={updateTheme}
        menuItems={themes}
        position={SelectField.Positions.BELOW}
        noAutoAdjust={true}
      />
    );
  }
}
