import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FlatButton } from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';

import { GITHUB_LINK } from '../utils';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <footer className="react-doc-footer">
        <div className="container">
          <div className="contact">
            <h4 className="md-title">Contact</h4>
            <FlatButton primary={true} label="Mikkel Laursen" href="mailto:mlaursen03@gmail.com">
              <FontIcon>mail</FontIcon>
            </FlatButton>
          </div>
          <div className="contribute">
            <h4 className="md-title">Contributing</h4>
            <p className="md-body-2">
              This project is currently developed by a single persion. Feel free
              to contribute!
            </p>
            <FlatButton secondary={true} label="Github" href={GITHUB_LINK}>
              <FontIcon iconClassName="fa fa-github" />
            </FlatButton>
          </div>
        </div>
      </footer>
    );
  }
}
