import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { IconButton } from 'react-md/lib/Buttons';
import { Card, CardTitle } from 'react-md/lib/Cards';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md/lib/DataTables';

import { sort, GITHUB_LINK } from '../../utils';
import { toPropTypeId } from '../../utils/StringUtils';
import Markdown from '../../containers/Markdown';
import PropTypesRow from './PropTypesRow';

export default class DocgenPropTypes extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    const propList = Object.keys(props.props).map(name => ({ name, ...props.props[name] }));

    this.state = {
      ascending: true,
      sortedComponents: sort(propList, 'name', true),
    };
  }

  static propTypes = {
    component: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
  };

  sort = () => {
    const ascending = !this.state.ascending;
    this.setState({
      ascending,
      sortedComponents: sort(this.state.sortedComponents, 'name', ascending),
    });
  };

  render() {
    const { ascending, sortedComponents } = this.state;
    const { component, source, description } = this.props;

    const rows = sortedComponents.map(props => <PropTypesRow key={props.name} {...props} />);

    return (
      <Card
        id={`prop-types-${toPropTypeId(component)}`}
        className="component-prop-types"
        raise={false}
      >
        <CardTitle title={component}>
          <IconButton
            href={`${GITHUB_LINK}/blob/master/${source}`}
            iconClassName="fa fa-github"
            tooltipLabel={`Github source for ${component}`}
            tooltipPosition="left"
          />
        </CardTitle>
        <Markdown markdown={description} className="md-card-text" />
        <DataTable plain={true}>
          <TableHeader>
            <TableRow autoAdjust={false}>
              <TableColumn className="adjusted" onClick={this.sort} sorted={ascending}>Prop name</TableColumn>
              <TableColumn className="adjusted">Prop type</TableColumn>
              <TableColumn className="grow">Description</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </DataTable>
      </Card>
    );
  }
}
