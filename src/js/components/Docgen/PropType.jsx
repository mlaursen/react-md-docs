import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { TableColumn } from 'react-md/lib/DataTables';

//import Markdown from '../../containers/Markdown';

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
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
      ]),
    }).isRequired,
    required: PropTypes.bool,
  };

  getFullName = ({ name, value }) => {
    switch(name) {
      case 'arrayOf':
        return `${name}(${this.getFullName(value)})`;
      case 'enum':
        return `oneOf([${value.map(v => v.value).join(', ')}])`;
      default:
        return name;
    }
  };

  render() {
    const { type, required } = this.props;

    return (
      <TableColumn className="prop-name prop-type" tooltipLabel={required ? 'Required' : null} tooltipPosition="top" tooltipDelay={300}>
        {this.getFullName(type) + (required ? ' *' : '')}
      </TableColumn>
    );
  }
}
