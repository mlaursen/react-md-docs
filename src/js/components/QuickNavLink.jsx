import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import FontIcon from 'react-md/lib/FontIcons';
import classnames from 'classnames';

export default class QuickNavLink extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'right']).isRequired,
    className: PropTypes.string,
  };

  render() {
    const { to, icon, label, name, align, className } = this.props;
    const fi = <FontIcon>{icon}</FontIcon>;
    return (
      <Link to={to} className={classnames('quick-nav-link', align, className)}>
        {align === 'left' && fi}
        <div className="titles">
          <h6 className="md-subheading-2">{label}</h6>
          <h4 className="md-headline">
            {name}
          </h4>
        </div>
        {align === 'right' && fi}
      </Link>
    );
  }
}
