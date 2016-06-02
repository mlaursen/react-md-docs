import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

export default class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
  };

  render() {
    const { title, subtitle, time, img, titleClassName, subtitleClassName } = this.props;
    return (
      <div className="news-item">
        <div className="news-left">
          <h4 className={classnames('md-headline', titleClassName)}>{title}</h4>
          <h6 className={classnames('md-subheader', subtitleClassName)}>{subtitle}</h6>
          <span className="secondary-text">{time}</span>
        </div>
        <div className="news-right">
          <img src={img} />
        </div>
      </div>
    );
  }
}
