import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Divider from 'react-md/lib/Dividers';

import { toClassName } from '../utils/StringUtils';
import Markdown from '../containers/Markdown';
import DocExample from './DocExample';
import DocgenPropTypes from './Docgen/DocgenPropTypes';

export default class DocPage extends Component {
  constructor(props) {
    super(props);
  }

  static context = {
    router: PropTypes.object.isRequired,
  };

  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node,
    ]),
    sectionName: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(PropTypes.shape({
      sectionName: PropTypes.string,
      code: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    })),
    docgens: PropTypes.arrayOf(PropTypes.shape({
      component: PropTypes.string.isRequired,
      description: PropTypes.string,
      props: PropTypes.object.isRequired,
    })),
  };

  static defaultProps = {
    examples: [],
    docgens: [],
    text: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { sectionName, text, examples, docgens } = this.props;

    let details;
    if(React.isValidElement(text)) {
      details = text;
    } else {
      details = typeof text === 'string' ? [text] : text;
      details = details.map((md, i) => <Markdown key={i} markdown={md} />);
    }
    return (
      <div className={`react-doc doc-component-${toClassName(sectionName)} md-card-list`}>
        <header className="component-info text-container">
          <h1 className="md-display-1">{sectionName}</h1>
          <Divider />
          {details}
        </header>
        {examples.map((example, key) => <DocExample {...example} key={key} fallbackId={`example-${key}`} />)}
        <h2 className="md-headline">Prop Types</h2>
        {docgens.map((docgen, key) => <DocgenPropTypes key={key} {...docgen} />)}
      </div>
    );
  }
}
