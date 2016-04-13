import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

const noAccents = ['brown', 'grey', 'blue-grey'];
const primaries = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const accents = [100, 200, 400, 700].map(i => `a-${i}`);
const colors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
].concat(noAccents);

export default class ColorPalette extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const palette = colors.map(color => {
      const colorBlocks = primaries.concat(noAccents.indexOf(color) === -1 ? accents : [])
        .map(suffix => {
          const name = `md-${color}-${suffix}`;

          return (
            <div
              key={name}
              className={classnames('color-block', name, {
                'light-color': suffix < 300 || ['yellow', 'amber'].indexOf(color) !== -1 || suffix === 'a-100',
              })}
            >
               {name}
            </div>
          );
        });

      return <div key={color} className="color-block-container">{colorBlocks}</div>;
    });
    return (
      <div className="color-palette">
        {palette}
      </div>
    );
  }
}
