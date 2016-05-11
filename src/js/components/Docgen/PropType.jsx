import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { TableColumn } from 'react-md/lib/DataTables';

import Markdown from '../../containers/Markdown';
import { tab } from '../../utils/StringUtils';

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

  handleEnum = (value, computed, tabs) => {
    let v;
    if(computed) {
      v = 'computed';
    } else {
      const values = tab(tabs) + value.map(v => v.value).join(',\n' + tab(tabs));
      v = `[\n${values}\n]`;
    }

    return `oneOf(${v})`;
  };

  handleUnion = (value, computed, tabs) => {
    let v;
    if(computed) {
      v = 'computed';
    } else {
      v = value.map(v => this.getFullName(v)).join(',\n' + tab(tabs));
    }

    return `oneOfType([\n${tab(tabs) + v}\n${tab(tabs - 1)}])`;
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

  getFullName = ({ name, value, computed }, tabs = 0) => {
    if(computed) {
      return this.handleComputed(name, value);
    }

    switch(name) {
      case 'union':
        return this.handleUnion(value, computed, tabs + 1);
      case 'arrayOf':
        return `${name}(${this.getFullName(value, tabs + 1)})`;
      case 'enum':
        return this.handleEnum(value, computed, tabs + 1);
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
