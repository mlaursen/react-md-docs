import React, { Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardMedia, CardTitle, CardActions, CardText } from 'react-md/lib/Cards';
import Avatar from 'react-md/lib/Avatars';
import { FlatButton, IconButton } from 'react-md/lib/Buttons';

import { randomImage } from '../../utils';

export default class CardExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const overlay = (
      <CardTitle
        key="overlay"
        title="Such nature"
        subtitle="Wow!"
        className="justify-between"
      >
        <IconButton>star_outline</IconButton>
      </CardTitle>
    );
    return (
      <Card isExpandable={true}>
        <CardMedia overlay={overlay}>
          <img
            src={randomImage({ width: 600, height: 337, section: 'nature' })}
            alt="Some nature image"
          />
        </CardMedia>
        <CardTitle
          avatar={<Avatar src={randomImage()} alt="Some random image" />}
          title="Card Title"
          subtitle="Card Subtitle"
        />
        <CardActions isExpander={true}>
          <FlatButton label="Action 1" />
          <FlatButton label="Action 2" />
        </CardActions>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          dictum justo, id mattis lorem. Sed vestibulum bibendum nisl a pretium.
          Ut finibus ligula quis elementum facilisis. Praesent ultrices sagittis
          urna quis suscipit. Donec viverra lacinia arcu, ac maximus metus
          egestas ut. Donec posuere quam vel finibus imperdiet. Proin lobortis
          turpis erat, tristique pharetra nunc sodales eget.
        </CardText>
      </Card>
    );
  }
}
