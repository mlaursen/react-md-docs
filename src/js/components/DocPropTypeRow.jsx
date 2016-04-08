import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { TableRow, TableColumn } from 'react-md/lib/DataTables';

import Markdown from '../containers/Markdown';

export default class DocPropTypeRow extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    defaultValue: PropTypes.any,
    required: PropTypes.bool,
  };

  render() {
    const { name, desc, type, defaultValue, required } = this.props;

    let dv;
    if(typeof defaultValue !== 'undefined') {
      dv = (
        <span className="prop-default">
          {'default: '}
          <code>{defaultValue === null ? 'null' : defaultValue.toString()}</code>
        </span>
      );
    }

    return (
      <TableRow>
        <TableColumn className="prop-name">{name}</TableColumn>
        <TableColumn className="prop-info">
          <div>
            <span className="prop-type">{type}</span>
            {required && <span className="prop-required" />}
            {dv}
          </div>
          <Markdown markdown={desc} className="prop-desc" />
        </TableColumn>
      </TableRow>
    );
  }
}
