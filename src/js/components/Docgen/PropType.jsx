import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { TableColumn } from 'react-md/lib/DataTables';

import Markdown from '../../containers/Markdown';
import { getPropTypeString } from '../../utils/StringUtils';

export default class PropType extends Component {
  constructor(props) {
    super(props);
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
      description: PropTypes.string,
      computed: PropTypes.bool,
    }).isRequired,
    required: PropTypes.bool,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { type, required } = this.props;

    const markdown = `\`\`\`js\n${getPropTypeString(type) + (required ? ' *' : '')}\n\`\`\``;
    return (
      <TableColumn className="prop-name justified" tooltipLabel={required ? 'Required' : null} tooltipPosition="top" tooltipDelay={300}>
        <Markdown markdown={markdown} />
      </TableColumn>
    );
  }
}
