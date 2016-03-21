import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List, ListItem } from 'react-md/lib/Lists';
import Subheader from 'react-md/lib/Subheaders';
import { Checkbox } from 'react-md/lib/SelectionControls';

const ITEMS = Array.apply(null, new Array(5)).map(() => 'Single-line item');
const NESTED_ITEMS = ['Revealed single-line item', 'Revealed single-line item'];

export default class ControlledNestedExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    // Horrible example of nested state.. It's easier to use initiallyOpen instead
    // of controlling everything.
    const state = {};
    ITEMS.forEach((_, i) => {
      state[`li${i}`] = {
        checked: false,
        open: false,
      };
    });
    this.state = state;
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  toggle = (i, bool) => {
    const key = `li${i}`;
    this.setState({
      [key]: Object.assign({}, this.state[key], {
        [bool]: !this.state[key][bool],
      }),
    });
  };

  toggleExpanded = (i) => {
    this.toggle(i, 'open');
  };

  toggleCheckbox = (i) => {
    this.toggle(i, 'checked');
  };

  render() {
    const items = ITEMS.map((primaryText, i) => (
      <ListItem
        key={i}
        isOpen={this.state[`li${i}`].open}
        onExpanderClick={this.toggleExpanded.bind(this, i)}
        primaryText={primaryText}
        expandOnClick={false}
        primaryAction={this.toggleCheckbox.bind(this, i)}
        primaryActionNode={(
          <Checkbox checked={this.state[`li${i}`].checked} onChange={this.toggleCheckbox.bind(this, i)} />
        )}
        nestedItems={NESTED_ITEMS.map((text, i) => <ListItem key={i} primaryText={text} />)}
      />
    ));

    return (
      <List>
        <Subheader primary={true} primaryText="A controlled List" />
        {items}
      </List>
    );
  }
}
