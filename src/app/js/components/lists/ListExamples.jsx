import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List, ListItem } from 'react-md/lib/Lists';
import { IconButton } from 'react-md/lib/Buttons';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import Divider from 'react-md/lib/Dividers';
import Subheader from 'react-md/lib/Subheaders';

import { randomAvatars } from '../../utils';
const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarButton = () => <IconButton>star</IconButton>;
const avatars = randomAvatars(3);

export default class ListExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <List textOnly={true} subheader="Text Only List">
          <ListItem primaryText="Inbox" />
          <ListItem primaryText="Starred" />
          <ListItem primaryText="Sent Mail" />
          <ListItem primaryText="Drafts" />
        </List>
        <List>
          <Subheader primaryText="Folders" />
          <ListItem
            leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
            rightIcon={<InfoIcon />}
            primaryText="Photos"
            secondaryText="Jan 9, 2014"
          />
          <ListItem
            leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
            rightIcon={<InfoIcon />}
            primaryText="Recipes"
            secondaryText="Jan 17, 2014"
          />
          <ListItem
            leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
            rightIcon={<InfoIcon />}
            primaryText="Work"
            secondaryText="Jan 28, 2014"
          />
          <Divider inset={true} />
          <Subheader primaryText="Files" />
          <ListItem
            leftAvatar={<Avatar className="avatar-blue" icon={<FontIcon>insert_drive_file</FontIcon>} />}
            rightIcon={<InfoIcon />}
            primaryText="Vacation itinerary"
            secondaryText="Jan 20, 2014"
          />
          <ListItem
            leftAvatar={<Avatar className="avatar-amber" icon={<FontIcon>insert_photo</FontIcon>} />}
            rightIcon={<InfoIcon />}
            primaryText="Kitchen remodel"
            secondaryText="Jan 10, 2014"
          />
        </List>
        <List subheader="Three line example" primarySubheader={true}>
          <ListItem
            leftAvatar={avatars[0]}
            rightIcon={<StarButton />}
            primaryText="Brunch this weekend?"
            secondaryText="Ali Connors"
            secondaryText2="I'll be in your neighborhood sometime this week"
          />
          <ListItem
            leftAvatar={avatars[1]}
            rightIcon={<StarButton />}
            primaryText="Summer BBQ"
            secondaryText="to Alex, Scott, Jennifer"
            secondaryText2="Wish I could come, but I'm out of town this weekend."
          />
          <ListItem
            leftAvatar={avatars[2]}
            rightIcon={<StarButton />}
            primaryText="Oui Oui"
            secondaryText="Sandra Adams - Do you have Paris"
            secondaryText2="recommendations? Have you ever been?"
          />
        </List>
      </div>
    );
  }
}
