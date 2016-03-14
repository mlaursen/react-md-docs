import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Divider from 'react-md/lib/Dividers';

import { getComponentDocs } from '../actions/docs';
import Markdown from '../containers/Markdown';

@connect(state => {
  return state.docs;
}, {
  getComponentDocs,
})
export default class DocPage extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node,
    ]),
    sectionName: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.shape({
      sectionName: PropTypes.string,
      code: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    })),
    components: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      props: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        required: PropTypes.bool,
      })),
    })),
    // from react-router
    params: PropTypes.object,
  };

  static defaultProps = {
    components: [],
    text: '',
  };

  componentWillMount() {
    this.updateDocs(this.props);
  }

  componentWillUpdate(nextProps) {
    if(this.props.params.component !== nextProps.params.component) {
      this.updateDocs(nextProps);
    }
  }

  updateDocs = ({ params, getComponentDocs }) => {
    let next;
    if(params.subcomponent) {
      next = params.subcomponent + '-' + params.component;
    } else {
      next = params.component;
    }
    getComponentDocs(next);
  };

  render() {
    const { sectionName, text } = this.props;

    const componentName = sectionName;
    const title = sectionName;
    let details;
    if(React.isValidElement(text)) {
      details = text;
    } else {
      details = typeof text === 'string' ? [text] : text;
      details = details.map((md, i) => <Markdown key={i} markdown={md} />);
    }
    return (
      <div className={`react-doc doc-component-${componentName}`}>
        <header className="component-info">
          <h1 className="md-display-1">{title}</h1>
          <Divider />
          {details}
        </header>
      </div>
    );
  }
}
