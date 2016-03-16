import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import FontIcon from 'react-md/lib/FontIcons';

export default class FontIconExamples extends Component {
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
