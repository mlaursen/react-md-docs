import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import { IconButton, FloatingButton } from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import injectTooltip from 'react-md/lib/Tooltips';

@injectTooltip
class TooltipFontIcon extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    tooltipLabel: PropTypes.string,
    children: PropTypes.node,
    iconClassName: PropTypes.string,
    tooltip: PropTypes.node.isRequired,
  };

  render() {
    const { tooltip, iconClassName, children, ...props } = this.props;

    // Material icons shouldn't have any other children other than the child string and
    // it gets converted into a span if the tooltip is added, so we add a container
    // around the two.
    return (
      <div {...props} className="inline-rel-container">
        <FontIcon iconClassName={iconClassName} children={children} />
        {tooltip}
      </div>
    );
  }
}

const TooltipLink = injectTooltip(({ tooltip, children, className, ...props }) => (
  <a
    {...props}
    className={classnames(className, 'inline-rel-container')}
  >
    {children}
    {tooltip}
  </a>
));

export default class TooltipExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <section>
          <p>Any component can be composed with the tooltip. Here is are some with the FontIcons.</p>
          <TooltipFontIcon tooltipLabel="Print" tooltipPosition="top">print</TooltipFontIcon>
          <TooltipFontIcon tooltipLabel="Print" tooltipPosition="right">print</TooltipFontIcon>
          <TooltipFontIcon tooltipLabel="Print" tooltipPosition="bottom">print</TooltipFontIcon>
          <TooltipFontIcon tooltipLabel="Print" tooltipPosition="left">print</TooltipFontIcon>
          <p>
            Tooltips will not appear on a composed component if the tooltipLabel is not specified.
            Here are some examples of a link.
          </p>
          <TooltipLink href="#">No tooltip</TooltipLink>
          <TooltipLink tooltipLabel="Wow!" tooltipPosition="top" href="#">Some link!</TooltipLink>
          <TooltipLink tooltipLabel="What a save!" tooltipPosition="right" href="#">Some link!</TooltipLink>
          <TooltipLink tooltipLabel="No Problem." tooltipPosition="bottom" href="#">Some link!</TooltipLink>
        </section>
        <section>
          <p>You can use the tooltip prop on IconButtons and FloatingButtons.</p>
          <IconButton tooltipLabel="Help! I need somebody">help</IconButton>
          <FloatingButton tooltipLabel="Add some new feature" tooltipPosition="top">add</FloatingButton>
        </section>
      </div>
    );
  }
}
