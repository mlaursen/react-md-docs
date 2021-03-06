import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { IconButton } from 'react-md/lib/Buttons';
import { GITHUB_LINK } from '../../../utils';

export default class IconButtonExamples extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <p>
          Icon buttons can not be unstyled or styled with the primary/secondary color.
          However, they can use any font-icon library just like any other <code>FontIcon</code>
        </p>
        <IconButton>favorite</IconButton>
        <IconButton iconClassName="fa fa-star-o" />

        <p>
          When an icon button is disabled, any styling will be overridden and they
          will not be clickable.
        </p>
        <IconButton disabled>favorite</IconButton>
        <IconButton disabled>accessible</IconButton>

        <p>
          An <code>IconButton</code> can be rendered as a link. Tooltips
          are also built in. They will appear on hover or touch hold.
        </p>
        <IconButton href={GITHUB_LINK} iconClassName="fa fa-github" />
        <IconButton
          tooltipLabel="Click to favorite something imaginary"
          children="favorite"
        />
      </div>
    );
  }
}
