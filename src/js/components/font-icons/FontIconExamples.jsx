import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class FontIconExamples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>FontIcons from Material Icons</p>
        <FontIcon>home</FontIcon>
        <FontIcon>favorite</FontIcon>
        <p>FontIcons from FontAwesome</p>
        <FontIcon iconClassName="fa fa-star-o" />
        <FontIcon iconClassName="fa fa-book" />
      </div>
    );
  }
}
