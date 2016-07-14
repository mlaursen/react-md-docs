import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { TableRow, TableColumn } from 'react-md/lib/DataTables';

import Markdown from '../../containers/Markdown';
import PropType from './PropType';
import DefaultValue from './DefaultValue';
import { getAdditionalPropTypeDescriptions } from '../../utils/StringUtils';

export default class PropTypesRow extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    defaultValue: PropTypes.shape({
      computed: PropTypes.bool,
      value: PropTypes.string,
    }),
    required: PropTypes.bool,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
      raw: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
      ]),
    }).isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { description, required, type, name, defaultValue } = this.props;

    const additionalDescriptions = getAdditionalPropTypeDescriptions(type, name);
    return (
      <TableRow autoAdjust={false}>
        <TableColumn className="prop-name justified">{name}</TableColumn>
        <PropType type={type} required={required} />
        <TableColumn className="prop-info grow">
          <DefaultValue defaultValue={defaultValue} />
          <Markdown markdown={description + additionalDescriptions} className="prop-description" />
        </TableColumn>
      </TableRow>
    );
  }
}
