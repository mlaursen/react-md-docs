import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class DefaultValue extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    defaultValue: PropTypes.shape({
      computed: PropTypes.bool.isRequired,
      value: PropTypes.string,
    }),
  };

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
