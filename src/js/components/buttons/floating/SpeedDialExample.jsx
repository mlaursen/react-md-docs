import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import { RaisedButton } from 'react-md/lib/Buttons';
import { SpeedDial } from 'react-md/lib/FABTransitions';
import { getOffset } from 'react-md/lib/utils';

import { getViewSize } from '../../../utils';
import Markdown from '../../../containers/Markdown';
import markdown from './SpeedDialMarkdown.md';

export default class SpeedDialExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      demoActive: false,
      isOpen: false,
      moving: false,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const { demoActive } = this.state;
    if(demoActive === nextState.demoActive) { return; }
    if(nextState.demoActive) {
      this.animateToBottom();
    } else {
      this.animateTo(getOffset(ReactDOM.findDOMNode(this.refs.end)));
    }
  }

  componentWillUnmount() {
    if(this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
  }

  animateTo = ({ left, top }) => {
    const offset = getOffset(ReactDOM.findDOMNode(this.refs.speedDial));
    const styleKey = 'controlledStyle';

    this.setState({
      timeout: setTimeout(() => {
        this.setState({
          timeout: setTimeout(() => {
            this.setState({ timeout: null, moving: false, [styleKey]: null });
          }, 450),
          [styleKey]: { left, top },
        });
      }, 10),
      [styleKey]: offset,
      moving: true,
    });
  };

  animateToBottom = () => {
    const offset = getOffset(ReactDOM.findDOMNode(this.refs.speedDial));
    const { width, height } = getViewSize();

    this.animateTo({
      left: width - 56 - 32,
      top: offset.top + (height - (offset.top - window.scrollY)) - 56 - 16,
    });
  };

  handleControlledClick = () => {
    if(!this.state.demoActive) {
      this.setState({ demoActive: true });
    } else {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  closeSpeedDial = () => {
    this.setState({ isOpen: false });
  };

  endDemo = () => {
    this.setState({ demoActive: false, isOpen: false });
  };

  render() {
    const fabs = [{
      children: 'star_rate',
      onClick: this.closeSpeedDial,
    }, {
      children: 'thumb_up',
      onClick: this.closeSpeedDial,
    }, {
      children: 'play_arrow',
      onClick: this.closeSpeedDial,
    }];

    const { isOpen, demoActive, moving, controlledStyle } = this.state;
    return (
      <div>
        <Markdown markdown={markdown} />
        {(demoActive || moving) &&
          /* fake size of floating button */
          <div style={{ margin: '1em', height: 56 }}>
            <RaisedButton
              onClick={this.endDemo}
              label="End Speed Dial Demo"
              ref="end"
            />
          </div>
        }
        <SpeedDial
          ref="speedDial"
          isOpen={isOpen}
          onClick={this.handleControlledClick}
          secondary={true}
          fabs={fabs}
          passiveIconChildren="share"
          activeIconChildren="close"
          containerProps={{
            style: controlledStyle,
            className: classnames({ 'inactive': !demoActive && !moving, moving }),
          }}
        />
      </div>
    );
  }
}
