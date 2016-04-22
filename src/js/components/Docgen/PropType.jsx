import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { TableColumn } from 'react-md/lib/DataTables';

import Markdown from '../../containers/Markdown';

export default class PropType extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
      raw: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
      ]),
    }).isRequired,
    required: PropTypes.bool,
  };

  handleEnum = (value, computed) => {
    let v;
    if(computed) {
      v = 'computed';
    } else {
      v = `[\n  ${value.map(v => v.value).join(',\n  ')}\n]`;
    }

    return `oneOf(${v})`;
  };

  handleUnion = (value, computed) => {
    let v;
    if(computed) {
      v = 'computed';
    } else {
      v = value.map(v => this.getFullName(v)).join(',\n  ');
    }

    return `oneOfType([\n  ${v}\n])`;
  };

  handleComputed = (name, value) => {
    const computed = eval(value);
    switch(name) {
      case 'enum':
        return this.handleEnum(computed.map(v => ({ value: `'${v}'`})));
      case 'union':
        return computed;
      default:
        return computed;
    }
  };

  getFullName = ({ name, value, computed }) => {
    if(computed) {
      return this.handleComputed(name, value);
    }

    switch(name) {
      case 'union':
        return this.handleUnion(value, computed);
      case 'arrayOf':
        return `${name}(${this.getFullName(value)})`;
      case 'enum':
        return this.handleEnum(value, computed);
      default:
        return name;
    }
  };

  render() {
    const { type, required } = this.props;

    const markdown = `\`\`\`js\n${this.getFullName(type) + (required ? ' *' : '')}\n\`\`\``;
    return (
      <TableColumn className="prop-name justified" tooltipLabel={required ? 'Required' : null} tooltipPosition="top" tooltipDelay={300}>
        <Markdown markdown={markdown} />
      </TableColumn>
    );
  }
}
