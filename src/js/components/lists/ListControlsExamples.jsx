import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List, ListItemControl } from 'react-md/lib/Lists';
import { Checkbox, Switch } from 'react-md/lib/SelectionControls';

import Markdown from '../../containers/Markdown';
const markdown = `
A List that has controls can be implemented by using the \`ListItemControl\`
component. A control can either have a primary or a secondary action. According
to the specs, the primary action can __only__ be a \`Checkbox\`. A secondary
action can be a \`Checkbox\`, \`Switch\`, or a \`Reorder\` icon.

When using the \`ListItemControl\` component, it updates the \`primaryAction\` or
\`secondaryAction\` props so that the label is a list item's styled primary and
secondary text. It also disables the hover effect on a list item.
`;

const formatDate = date => {
  const lang = typeof window !== 'undefined'
    ? window.navigator.userLanguage || window.navigator.language
    : 'en-US';
  return Intl.DateTimeFormat(lang, {
    month: '2-digit',
    year: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};
export default class ListControlsExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { checked: false };
  }

  getSyncMessage = () => {
    const { checked } = this.state;
    if(!checked) {
      return 'Calendars not synced.';
    }

    return `Last Synced on ${formatDate(new Date())}`;
  };

  render() {
    const { checked } = this.state;
    const SyncCalendars = (
      <Checkbox
        checked={checked}
        onChange={() => this.setState({ checked: !this.state.checked })}
      />
    );

    return (
      <div>
        <Markdown markdown={markdown} />
        <List subheader="Notifications" primarySubheader={true}>
          <ListItemControl
            primaryAction={<Checkbox />}
            primaryText="Notifications"
            secondaryText="Allow Notifications"
          />
          <ListItemControl
            secondaryAction={<Switch />}
            primaryText="Sounds"
            secondaryText="Hangouts message"
          />
          <ListItemControl
            secondaryAction={SyncCalendars}
            primaryText="Sync Google Calendars"
            secondaryText={this.getSyncMessage()}
          />
        </List>
      </div>
    );
  }
}
