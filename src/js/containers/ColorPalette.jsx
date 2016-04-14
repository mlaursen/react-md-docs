import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { initializeColors } from '../actions/docs';

@connect(state => ({ colors: state.docs.colors }), { initializeColors })
export default class ColorPalette extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    colors: PropTypes.array.isRequired,
    initializeColors: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.initializeColors();
  }

  render() {
    const palette = this.props.colors.map(colorHues => {
      const colorBlocks = colorHues.map(({ name, isLight}) => (
        <div key={name} className={classnames('color-block', name, { 'light-color': isLight })}>
          ${name}
        </div>
      ));

      return (
        <div key={colorHues[0].color} className="color-block-container">
          {colorBlocks}
        </div>
      );
    });
    return (
      <div className="color-palette">
        <h1 className="md-display-1">Color Palette</h1>
        {palette}
      </div>
    );
  }
}
