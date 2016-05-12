import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { LinearProgress } from 'react-md/lib/Progress';

import { addToast } from '../../../actions/docs';

@connect(() => ({}), {
  addToast,
})
export default class DeterminateExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  static propTypes = {
    addToast: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    if(this.state.interval) { clearInterval(this.state.interval); }
    if(this.state.timeout) { clearTimeout(this.state.timeout); }
  }

  startFakeProgress = () => {
    const file = this.refs.fileInput.files[0];
    if(!file || typeof this.state.progress === 'number') { return; }

    // pretend it always takes 6 seconds to upload a file
    const update = 20;
    const increment = 100 / (6000 / update);
    this.setState({
      progress: 0,
      interval: setInterval(() => {
        const progress = Math.min(this.state.progress + increment, 100);
        const state = { progress };
        if(progress >= 100) {
          state.interval = null;
          clearInterval(this.state.interval);
          this.props.addToast({ text: `You have fakely uploaded '${file.name}'` });

          state.timeout = setTimeout(() => {
            this.setState({ timeout: null, progress: null });
          }, 2000);
        }

        this.setState(state);
      }, update),
    });
  };

  render() {
    const { progress } = this.state;
    return (
      <CSSTransitionGroup
        component="div"
        transitionName="opacity"
        transitionEnterTimeout={150}
        transitionLeaveTimeout={150}
      >
        {typeof progress === 'number' && <LinearProgress value={progress} />}
        <input type="file" onChange={this.startFakeProgress} ref="fileInput" />
      </CSSTransitionGroup>
    );
  }
}
