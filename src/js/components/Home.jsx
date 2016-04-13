import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { RaisedButton } from 'react-md/lib/Buttons';

import Markdown from '../containers/Markdown';
import ImgCard from './ImgCard';
import customization from '../../imgs/customization.svg';
import gettingStarted from '../../imgs/getting-started.svg';
import components from '../../imgs/components.svg';
import logo from '../../imgs/logo.png';
import { FIRST_COMPONENT_LINK } from '../utils/RouteUtils';

const about = `
This project's goal is to be able to quickly style and set up a material design react website
through sass and css instead of inline styling. This is a web based library and not meant to
be used with React Native.
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static contextTypes = {
    // from react-router
    router: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.updateToolbar);
    this.updateToolbar();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateToolbar);
    this.updateToolbar(true);
  }

  updateToolbar = (remove) => {
    const scrollDistance = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    const content = document.querySelector('.react-md-docs .md-navigation-drawer-content');
    const toolbar = content.querySelector('.md-navigation-drawer-toolbar');
    if((typeof remove === 'boolean' && remove) || scrollDistance > 400) {
      content.classList.remove('inactive');
      toolbar.classList.remove('inactive');
    } else {
      content.classList.add('inactive');
      toolbar.classList.add('inactive');
    }
  };

  viewDemo = () => {
    this.context.router.push(FIRST_COMPONENT_LINK);
  };

  render() {
    return (
      <div className="home">
        <section className="banner">
          <h1 className="md-display-2">react-md</h1>
          <img src={logo} alt="react-md logo" className="logo" />
          <RaisedButton onClick={this.viewDemo} label="View Demo" secondary />
        </section>
        <Markdown markdown={about} className="about container text-container" />
        <section className="getting-started md-card-list">
          <ImgCard
            to="getting-started"
            src={gettingStarted}
            alt="A person figure sitting at a desk looking at a laptop."
            title="Getting Started"
          />
          <ImgCard
            to="customization"
            src={customization}
            alt="A person figure painting on a canvas."
            title="Customization"
          />
          <ImgCard
            to={FIRST_COMPONENT_LINK}
            src={components}
            alt="Two person figures carrying a material item shaped like a pipe."
            title="Components"
          />
        </section>
      </div>
    );
  }
}
