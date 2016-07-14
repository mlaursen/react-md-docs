import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class DefaultValue extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    defaultValue: PropTypes.shape({
      computed: PropTypes.bool.isRequired,
      value: PropTypes.string,
    }),
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { defaultValue } = this.props;
    if(!defaultValue) {
      return null;
    }

    return (
      <div className="prop-default-value">
        default:
        <code>{defaultValue.value}</code>
      </div>
    );
  }
}
