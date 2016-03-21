import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';

import { randomImage } from '../../utils';

export default class AvatarExamples extends Component {
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
      <div>
        <div className="middle-align">
          <Avatar src={randomImage()} alt="Some image from unsplash.it" />
          <span>Avatar with a random image from https://unsplash.it/</span>
        </div>
        <div className="middle-align">
          <Avatar icon={<FontIcon iconClassName="fa fa-hand-spock-o" />} />
          <span>Avatar with a Font Awesome icon.</span>
        </div>
        <div className="middle-align">
          <Avatar icon={<FontIcon iconClassName="fa fa-rocket" />} random />
          <span>Avatar with a Font Awesome icon and a random color.</span>
        </div>
        <div className="middle-align">
          <Avatar>M</Avatar>
          <span>Avatar with a Letter and default color.</span>
        </div>
        <div className="middle-align">
          <Avatar random={true}>O</Avatar>
          <span>Avatar with a Letter and a random color.</span>
        </div>
        <div className="middle-align">
          <Avatar suffix="color-1">X</Avatar>
          <span>Avatar with a letter and avatar color 1.</span>
        </div>
        <div className="middle-align">
          <Avatar suffix="color-2">X</Avatar>
          <span>Avatar with a letter and avatar color 2.</span>
        </div>
        <div className="middle-align">
          <Avatar suffix="color-3">X</Avatar>
          <span>Avatar with a letter and avatar color 3.</span>
        </div>
      </div>
    );
  }
}
