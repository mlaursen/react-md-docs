import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import loremIpsum from 'lorem-ipsum';

import { IconButton } from 'react-md/lib/Buttons';
import Paper from 'react-md/lib/Papers';
import TextField from 'react-md/lib/TextFields';
import Toolbar from 'react-md/lib/Toolbars';
import Menu from 'react-md/lib/Menus';
import { List, ListItem } from 'react-md/lib/Lists';

import { randomAvatars } from '../../utils';

const avatars = randomAvatars(8);
const items = [0, 1, 2, 3];
const primaryTexts = items.map(() => {
  const s = loremIpsum({ count: 5, units: 'words' });
  return s.charAt(0).toUpperCase() + s.substring(1, s.length);
});
const secondaryTexts = items.map(() => loremIpsum());

export default class InToolbarExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { focus: false, value: '' };
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  handleChange = value => this.setState({ value });
  resetValue = () => this.setState({ value: '' });
  handleFocus = () => this.setState({ focus: true });
  handleBlur = () => this.setState({ focus: false });

  render() {
    const { focus, value } = this.state;

    return (
      <Paper className="phone-size-container">
        <Toolbar primary={false}>
          <IconButton className="action-left">arrow_back</IconButton>
          <TextField
            label="Search"
            onChange={this.handleChange}
            value={value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            block={true}
          />
          <IconButton className="md-toolbar-item" onClick={this.resetValue}>close</IconButton>
        </Toolbar>
        <Menu isOpen={focus && !!value.length} position={Menu.Positions.TOP_LEFT}>
					<ListItem primaryText="Aaron Bennett" rightAvatar={avatars[0]} />
					<ListItem primaryText="Abbey Christensen" rightAvatar={avatars[1]} />
					<ListItem primaryText="Ali Connors" rightAvatar={avatars[2]} />
					<ListItem primaryText="Alex Nelson" rightAvatar={avatars[3]} />
        </Menu>
        <List>
          {items.map(key => (
            <ListItem
              key={key}
              primaryText={primaryTexts[key]}
              secondaryText={secondaryTexts[key]}
              leftAvatar={avatars[key + 4]}
            />
          ))}
        </List>
        <CSSTransitionGroup
          component="div"
          transitionName="md-overlay"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
        >
          {focus && <div key="overlay" className="md-overlay" />}
        </CSSTransitionGroup>
      </Paper>
    );
  }
}
