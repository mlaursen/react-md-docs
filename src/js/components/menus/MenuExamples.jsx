import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Menu from 'react-md/lib/Menus';
import { ListItem } from 'react-md/lib/Lists';
import Divider from 'react-md/lib/Dividers';

const command = <span>&#x2318;</span>;

export default class MenuExamples extends Component {
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
      <div className="static-menu-examples">
        <Menu isOpen={true}>
          <ListItem primaryText="Undo" />
          <ListItem primaryText="Redo" disabled={true} />
          <Divider />
          <ListItem primaryText="Cut" disabled={true} />
          <ListItem primaryText="Copy" disabled={true} />
          <ListItem primaryText="Paste" />
        </Menu>
        <Menu isOpen={true} cascading={true}>
          <ListItem primaryText="Bold" rightIcon={<div>{command}B</div>} />
          <ListItem primaryText="Italic" rightIcon={<div>{command}I</div>} />
          <ListItem primaryText="Underline" rightIcon={<div>{command}U</div>} />
          <ListItem primaryText="Strikethrough" rightIcon={<div>Alt+Shift+5</div>} />
          <ListItem primaryText="Superscript" rightIcon={<div>{command}.</div>} />
          <ListItem primaryText="Subscript" rightIcon={<div>{command},</div>} />
          <Divider />
          <ListItem
            primaryText="Paragraph styles"
            nestedItems={[
              <ListItem primaryText="Single" key={0} />,
              <ListItem primaryText="1.15" key={1} />,
              <ListItem primaryText="Double" key={2} />,
              <ListItem primaryText="Custom: 1.2" key={3} />,
            ]}
          />
        </Menu>
      </div>
    );
  }
}
