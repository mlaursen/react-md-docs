import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import SelectField from 'react-md/lib/SelectFields';

import { updateTheme } from '../actions/layout';
import themes from '../constants/themes';

@connect(state => ({ theme: state.layout.theme }), {
  updateTheme,
})
export default class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    theme: PropTypes.string,
    updateTheme: PropTypes.func.isRequired,
  };

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
