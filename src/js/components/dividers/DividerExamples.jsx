import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import { List, ListItem, ListSubheader } from 'react-md/lib/Lists';

import { randomAvatars } from '../../utils';

const avatars = randomAvatars(3);

export default class DividerExamples extends Component {
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
        <form className="divider-example-container">
          <TextField label="Something" fullWidth={true} floatingLabel={false} />
          <Divider />
          <TextField label="Something else" fullWidth={true} floatingLabel={false} />
          <Divider />
        </form>

        <List className="divider-example-container">
          <ListSubheader primaryText="Inset Example" />
          <ListItem primaryText="Item 1" leftAvatar={avatars[0]} />
          <ListItem primaryText="Item 2" leftAvatar={avatars[1]} />
          <Divider inset={true} />
          <ListItem primaryText="Item 3" leftAvatar={avatars[2]} />
        </List>
      </div>
    );
  }
}
