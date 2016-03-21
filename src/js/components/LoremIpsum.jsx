import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import loremIpsum from 'lorem-ipsum';

export default class LoremIpsum extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    units: PropTypes.oneOf(['sentences', 'words', 'paragraphs']),
  };

  static defaultProps = {
    count: 1,
    units: 'paragraphs',
  };

  render() {
    const { count, units, ...props } = this.props;
    return (
      <div
        {...props}
        dangerouslySetInnerHTML={{
          __html: loremIpsum({ count, units, format: 'html' }),
        }}
      />
    );
  }
}
