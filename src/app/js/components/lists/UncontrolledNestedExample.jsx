import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List, ListItem } from 'react-md/lib/Lists';
import Subheader from 'react-md/lib/Subheaders';

export default class UncontrolledNestedExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const uncontrolledItems = Array.apply(null, new Array(5)).map((_, i) => {
      return (
        <ListItem
          key={i}
          initiallyOpen={i === 0}
          primaryText="Single-line item"
          nestedItems={[
            <ListItem key={i} primaryText="Revealed single-line item" />,
            <ListItem key={i + 1} primaryText="Revealed single-line item" />,
          ]}
        />
      );
    });

    return (
      <List>
        <Subheader primaryText="An uncontrolled list" />
        {uncontrolledItems}
      </List>
    );
  }
}
