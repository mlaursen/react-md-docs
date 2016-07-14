import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import { Card, CardTitle, CardMedia, CardActions } from 'react-md/lib/Cards';
import { FlatButton } from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';

import { updateTitle } from '../actions/ui';

@connect(() => ({}), {
  updateTitle,
})
export default class NotFound extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    updateTitle: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    this.props.updateTitle('404 Not Found');
  }

  navigateToHome = () => {
    this.context.router.push('/');
  };

  render() {
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
        <CardActions>
          <FlatButton primary={true} label="Navigate to Home page" onClick={this.navigateToHome}>
            <FontIcon>home</FontIcon>
          </FlatButton>
        </CardActions>
      </Card>
    );
  }
}
