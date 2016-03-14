import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { RaisedButton } from 'react-md/lib/Buttons';

import Markdown from '../containers/Markdown';
import ImgCard from './ImgCard';
import customization from '../../imgs/components.jpg';
import gettingStarted from '../../imgs/getting-started.jpg';
import components from '../../imgs/components.jpg';
import { FIRST_COMPONENT_LINK } from '../utils/RouteUtils';

const about = `
This project was created because I learn by doing and I wanted to learn Material Design.
There are already some other projects out there that are a lot farther along, so
those might be a better choice for you. I do think the other projects are set up
on inline styling, which I am not a fan of personally.

The eventual goal of this project is to be able to quickly set up a material design
website by changing a few variables or using the given sass mixins/functions for
fine tuning.
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

  viewDemo = () => {
    this.context.router.push(FIRST_COMPONENT_LINK);
  };

  render() {
    return (
      <div className="home">
        <section className="banner">
          <h1 className="md-display-2">react-md</h1>
          <h4 className="md-subheading-2">
            Material Design inspired React components built with sass
          </h4>
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
            to="components"
            src={components}
            alt="Two person figures carrying a material item shaped like a pipe."
            title="Components"
          />
        </section>
      </div>
    );
  }
}
