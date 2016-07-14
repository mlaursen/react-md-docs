import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

@connect(state => ({ marked: state.docs.marked }))
export default class Markdown extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    component: PropTypes.any,
    markdown: PropTypes.string.isRequired,
    marked: PropTypes.func.isRequired,
  };

  static defaultProps = {
    component: 'div',
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { component, markdown, marked, ...props } = this.props;
    delete props.dispatch;
    delete props.expandable;

    return React.createElement(component, {
      ...props,
      dangerouslySetInnerHTML: {
        __html: marked(markdown),
      },
    });
  }
}
