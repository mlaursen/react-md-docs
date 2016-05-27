import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import QuickNavLink from '../components/QuickNavLink';

@connect(state => ({
  previousTo: state.ui.previousTo,
  previousName: state.ui.previousName,
  nextTo: state.ui.nextTo,
  nextName: state.ui.nextName,
}))
export default class QuickNav extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    previousTo: PropTypes.string,
    previousName: PropTypes.string,
    nextTo: PropTypes.string,
    nextName: PropTypes.string,
  };

  render() {
    const { previousTo, previousName, nextTo, nextName } = this.props;
    let previous, next;
    if(previousTo) {
      previous = (
        <QuickNavLink
          to={previousTo}
          label="Previous"
          name={previousName}
          icon="arrow_back"
          align="left"
          className={!nextTo ? 'only' : null}
        />
      );
    } else {
      previous = <div className="quick-nav-link" />;
    }

    if(nextTo) {
      next = (
        <QuickNavLink
          to={nextTo}
          label="Next"
          name={nextName}
          icon="arrow_forward"
          align="right"
        />
      );
    } else {
      next = <div className="quick-nav-link" />;
    }
    return (
      <section className="quick-nav">
        {previous}
        {next}
      </section>
    );
  }
}
