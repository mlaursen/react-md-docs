import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { onUpdate } from '../../utils/RouteUtils';

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { store, ...props } = this.props;
    return (
      <Provider store={store}>
        <Router {...props} onUpdate={onUpdate} />
      </Provider>
    );
  }
}
