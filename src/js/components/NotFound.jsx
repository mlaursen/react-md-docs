import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Fuse from 'fuse.js';
import { connect } from 'react-redux';

import { Card, CardText, CardTitle, CardMedia, CardActions } from 'react-md/lib/Cards';
import { List, ListItem } from 'react-md/lib/Lists';
import { FlatButton } from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import TextField from 'react-md/lib/TextFields';

import { APP_URI_BASE } from '../utils';
import { routeData } from '../utils/RouteUtils';
import { updateTitle } from '../actions/layout';

const fuse = new Fuse(routeData, {
  keys: [{
    name: 'to',
    weight: 0.35,
  }, {
    name: 'href',
    weight: 0.35,
  }, {
    name: 'searchName',
    weight: 0.2,
  }, {
    name: 'primaryText',
    weight: 0.1,
  }],
});

@connect(() => ({}), {
  updateTitle,
})
export default class NotFound extends Component {
  constructor(props, context) {
    super(props, context);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { matches: [] };
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    updateTitle: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.updateTitle('404 Not Found');
  }

  handleChange = (value) => {
    this.setState({ matches: fuse.search(value) });
  };

  navigateToHome = () => {
    this.context.router.push(APP_URI_BASE + '/');
  };

  render() {
    const { matches } = this.state;
    const suggestions = matches.map(props => {
      return (
        <ListItem
          {...props}
          key={props.href || props.to}
        />
      );
    });

    const overlay = (
      <CardTitle
        key="overlay"
        title="Sorry!"
        subtitle="We could not find that page."
      />
    );

    return (
      <Card className="not-found-card">
        <CardMedia overlay={overlay}>
          <img src="https://unsplash.it/600/337?image=957" alt="A random image from lorem pixel's abstract section." />
        </CardMedia>
        <CardText>
          <TextField
            icon={<FontIcon>search</FontIcon>}
            onChange={this.handleChange}
            label="I am looking for..."
            containerClassName="md-title-text-field"
          />
          <CSSTransitionGroup
            component={List}
            className="page-suggestions"
            transitionName="opacity"
            transitionEnterTimeout={150}
            transitionLeaveTimeout={150}
          >
            {suggestions}
          </CSSTransitionGroup>
        </CardText>
        <CardActions>
          <FlatButton primary={true} label="Navigate to Home page" onClick={this.navigateToHome}>
            <FontIcon>home</FontIcon>
          </FlatButton>
        </CardActions>
      </Card>
    );
  }
}
