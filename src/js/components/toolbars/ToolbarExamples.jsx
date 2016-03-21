import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Toolbar from 'react-md/lib/Toolbars';
import { IconButton } from 'react-md/lib/Buttons';

import { GITHUB_LINK } from '../../utils';

export default class ToolbarExamples extends Component {
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
        <Toolbar
          primary={true}
          title="react-md"
          actionLeft={<IconButton>menu</IconButton>}
          actionsRight={<IconButton href={GITHUB_LINK} iconClassName="fa fa-github" className="md-toolbar-item justify-end" />}
        />
      </div>
    );
  }
}
