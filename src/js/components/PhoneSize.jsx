import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';

import Paper from 'react-md/lib/Papers';
import Toolbar from 'react-md/lib/Toolbars';
import { IconButton } from 'react-md/lib/Buttons';

export default class PhoneSize extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    children: PropTypes.node,
    iconLeft: PropTypes.string.isRequired,
    actionsRight: PropTypes.node,
    contentComponent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    contentClassName: PropTypes.string,
  };

  static defaultProps = {
    title: 'Title',
    primary: true,
    iconLeft: 'menu',
    contentComponent: 'section',
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      children,
      title,
      primary,
      iconLeft,
      actionsRight,
      className,
      contentComponent,
      contentClassName,
      ...props,
    } = this.props;

    const content = React.createElement(contentComponent, {
      className: classnames('phone-size-content', contentClassName),
      children,
    });
    return (
      <Paper className={classnames('phone-size-container', className)} {...props}>
        <Toolbar
          primary={primary}
          title={title}
          actionLeft={<IconButton>{iconLeft}</IconButton>}
          actionsRight={actionsRight}
        />
        {content}
      </Paper>
    );
  }
}
