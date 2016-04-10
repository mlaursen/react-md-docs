import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { TableRow, TableColumn } from 'react-md/lib/DataTables';

import Markdown from '../../containers/Markdown';
import PropType from './PropType';
import DefaultValue from './DefaultValue';

export default class PropTypesRow extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
      ]),
    }).isRequired,
  };

  render() {
    const { description, required, type, name, defaultValue } = this.props;
    if(!type) {
      console.log(name);
    }

    return (
      <TableRow autoAdjust={false}>
        <TableColumn className="prop-name">{name}</TableColumn>
        <PropType type={type} required={required} />
        <TableColumn className="prop-info">
          <DefaultValue defaultValue={defaultValue} />
          <Markdown markdown={description} className="prop-description" />
        </TableColumn>
      </TableRow>
    );
  }
}
