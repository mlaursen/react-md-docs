import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { IconButton, FloatingButton } from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import Tooltip from 'react-md/lib/Tooltips';

export default class TooltipExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <section>
          <p>Any component can be wrapped with the tooltip. Here is are some with the FontIcons.</p>
          <Tooltip text="Print" position="top">
            <FontIcon>print</FontIcon>
          </Tooltip>
          <Tooltip text="Print" position="right">
            <FontIcon>print</FontIcon>
          </Tooltip>
          <Tooltip text="Print" position="bottom">
            <FontIcon>print</FontIcon>
          </Tooltip>
        <Tooltip text="Print" position="left">
          <FontIcon>print</FontIcon>
        </Tooltip>
        </section>
        <section>
          <p>You can use the tooltip prop on IconButtons and FloatingButtons.</p>
          <IconButton tooltip="Help! I need somebody">help</IconButton>
          <FloatingButton tooltip="Add some new feature" tooltipPosition={Tooltip.TOP}>add</FloatingButton>
        </section>
      </div>
    );
  }
}
