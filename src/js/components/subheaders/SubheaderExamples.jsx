import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Subheader from 'react-md/lib/Subheaders';
import { List, ListItem } from 'react-md/lib/Lists';
import Avatar from 'react-md/lib/Avatars';

import { randomImage } from '../../utils';

export default class SubheaderExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <List>
          <Subheader primary={true} primaryText="Primary Styled" />
          <ListItem primaryText="First" />
          <ListItem primaryText="Second" />
          <ListItem primaryText="Third" />
        </List>

        <List>
          <Subheader primaryText="Inset" inset={true} />
          <ListItem primaryText="First" leftAvatar={<Avatar src={randomImage()} />} />
          <ListItem primaryText="Second" leftAvatar={<Avatar src={randomImage()} />} />
          <ListItem primaryText="Third" leftAvatar={<Avatar src={randomImage()} />} />
        </List>
      </div>
    );
  }
}
