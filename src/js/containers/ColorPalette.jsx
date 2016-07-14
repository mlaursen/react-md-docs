import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { initializeColors } from '../actions/docs';

const PRIMARY_INDEX = 5;

@connect(state => ({ colors: state.docs.colors }), { initializeColors })
export default class ColorPalette extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    colors: PropTypes.array.isRequired,
    initializeColors: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillMount() {
    this.props.initializeColors();
  }

  render() {
    const palette = this.props.colors.map(colorHues => {
      const primary = colorHues[PRIMARY_INDEX];

      const colorBlocks = colorHues.map(({ name, light, divide }) => (
        <li key={name} className={classnames('color', name, { light, divide })}>
          <div className="sass-variable">{name}</div>
        </li>
      ));

      return (
        <ul key={colorHues[0].color} className="color-list">
          <li key="primary" className={classnames('color primary', primary.name, { 'light': primary.light})}>
            <div className="color-name">{primary.color.replace(/-/g, ' ')}</div>
            <div className="sass-variable">{primary.name}</div>
          </li>
          {colorBlocks}
        </ul>
      );
    });
    return (
      <section className="color-palette">
        {palette}
      </section>
    );
  }
}
