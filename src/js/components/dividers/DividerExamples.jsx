import React, { Component } from 'react';
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import { List, ListItem } from 'react-md/lib/Lists';
import Subheader from 'react-md/lib/Subheaders';

import { randomAvatars } from '../../utils';

const avatars = randomAvatars(3);

export default class DividerExamples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="divider-example-container">
          <TextField label="Something" block={true} floatingLabel={false} />
          <Divider />
          <TextField label="Something else" block={true} floatingLabel={false} />
          <Divider />
        </form>

        <List className="divider-example-container">
          <Subheader primaryText="Inset Example" />
          <ListItem primaryText="Item 1" leftAvatar={avatars[0]} />
          <ListItem primaryText="Item 2" leftAvatar={avatars[1]} />
          <Divider inset={true} />
          <ListItem primaryText="Item 3" leftAvatar={avatars[2]} />
        </List>
      </div>
    );
  }
}
