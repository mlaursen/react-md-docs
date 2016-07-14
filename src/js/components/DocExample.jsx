/*eslint-env node*/
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';

import { Card, CardTitle, CardText } from 'react-md/lib/Cards';
import Markdown from '../containers/Markdown';
import { toClassName } from '../utils/StringUtils';

export default class DocExample extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    code: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    fallbackId: PropTypes.string.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { code, children, className, name, fallbackId, ...props } = this.props;
    const markdown = `
\`\`\`js
${code}
\`\`\`
    `;

    return (
      <Card
        {...props}
        className={classnames('component-example', className)}
        raise={false}
        iconChildren="code"
        id={name ? toClassName(name) : fallbackId}
        expanderTooltipLabel="View the source code for this example"
      >
        <CardTitle title={name || 'Examples'} isExpander={true} />
        <Markdown expandable={true} markdown={markdown} className="md-card-text example-code" />
        <CardText>{children}</CardText>
      </Card>
    );
  }
}
