import React, { Component } from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import { IconButton } from 'react-md/lib/Buttons';

import { GITHUB_LINK } from '../../utils';

export default class ToolbarExamples extends Component {
  constructor(props) {
    super(props);
  }

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
