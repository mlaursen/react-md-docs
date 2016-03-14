import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from '../DocPage';
import AvatarExamples from './AvatarExamples';
import AvatarExamplesRaw from '!!raw!./AvatarExamples';

export default class AvatarDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <DocPage
        {...this.props}
        text="Avatars can be used to symbolize people or objects."
        sectionName="Avatars"
        examples={[{
          code: AvatarExamplesRaw,
          children: <AvatarExamples />,
        }]}
        components={[{
          name: 'Avatar',
          children: false,
          props: [{
            name: 'src',
            desc: 'The image source for the avatar if you want to use an image.',
            type: 'string',
          }, {
            name: 'alt',
            desc: 'The image alt tag.',
            type: 'string',
          }, {
            name: 'icon',
            desc: 'The FontIcon you want to use in the avatar.',
            type: 'node',
          }, {
            name: 'children',
            desc: 'The letter you want to use in the avatar.',
            type: 'string',
          }, {
            name: 'random',
            desc: `A boolean that enables adding a random material design color from the available
            avatar css color classes.`,
            type: 'bool',
          }, {
            name: 'suffix',
            desc: 'The max color number that can be used when generating a random color for the avatar.',
            type: 'number',
          }, {
            name: 'suffixes',
            desc: 'A list of available suffixes for random colors.',
            type: 'arrayOf(string)',
            defaultValue: `['color-1', 'color-2', 'color-3']`,
          }],
        }]}
      />
    );
  }
}
