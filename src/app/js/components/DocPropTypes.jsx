import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Card, CardTitle, CardText } from 'react-md/lib/Cards';
import { IconButton } from 'react-md/lib/Buttons';

import { GITHUB_LINK } from '../utils';
import { toClassName } from '../utils/StringUtils';
import Markdown from '../containers/Markdown';
import DocPropTypeRow from './DocPropTypeRow';

export default class DocPropTypes extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    sectionName: PropTypes.string,
    name: PropTypes.string.isRequired,
    desc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    props: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      defaultValue: PropTypes.any,
      required: PropTypes.bool,
    })),
    children: PropTypes.bool,
    others: PropTypes.bool,
  };

  static defaultProps = {
    children: true,
    others: true,
  };

  render() {
    const { name, sectionName, desc, props, children, others } = this.props;

    const propNames = props.map(p => p.name);
    if(propNames.indexOf('className') === -1) {
      props.push({
        name: 'className',
        desc: 'The className to be applied to the component.',
        type: 'string',
      });
    }

    if(children && propNames.indexOf('children') === -1) {
      props.push({
        name: 'children',
        desc: 'Any children to display in the component.',
        type: 'node',
      });
    }

    if(others) {
      props.push({
        name: 'any remaining props',
        desc: 'Any other props (such as style, aria-tags, etc) will be applied to the container component.',
        type: 'any',
      });
    }

    const rows = props.map(props => <DocPropTypeRow {...props} key={props.name} />);

    return (
      <Card
        id={`prop-types-${toClassName(name)}`}
        className="component-prop-types"
        raise={false}
      >
        <CardTitle title={name}>
          <IconButton
            href={`${GITHUB_LINK}/tree/master/src/js/${sectionName ? sectionName + '/' : ''}${name}.js`}
            iconClassName="fa fa-github"
            tooltip={`Github source of ${name}`}
            tooltipPosition="left"
          />
        </CardTitle>
        {desc && <CardText><Markdown markdown={desc} /></CardText>}
        <CardText className="with-table">
          <table className="md-data-table striped">
            <thead>
              <tr>
                <th>Prop Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </CardText>
      </Card>
    );
  }
}
