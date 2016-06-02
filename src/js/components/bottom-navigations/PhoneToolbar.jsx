import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

import { IconButton } from 'react-md/lib/Buttons';
import TextField from 'react-md/lib/TextFields';
import Toolbar from 'react-md/lib/Toolbars';

const actionLeft = <IconButton key="menu">menu</IconButton>;
const kebab = <IconButton key="kebab">more_vert</IconButton>;

export default class PhoneToolbar extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    inset: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    inset: false,
  };

  render() {
    const { inset } = this.props;
    let actionsRight;
    if(inset) {
      actionsRight = (
        <div className="action-area">
          <TextField label="Search" block />
          {kebab}
        </div>
      );
    } else {
      actionsRight = (
        <div className="action-area">
          <IconButton>refresh</IconButton>
          {kebab}
        </div>
      );
    }

    return (
      <Toolbar
        primary={false}
        containerClassName={classnames('demoing-toolbar', { inset })}
        actionLeft={actionLeft}
        actionsRight={actionsRight}
      />
    );
  }
}
