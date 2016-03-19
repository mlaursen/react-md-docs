import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { CircularProgress } from 'react-md/lib/Progress';
import { RaisedButton } from 'react-md/lib/Buttons';

const fakeContent = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet et urna at dignissim. Phasellus hendrerit eleifend tincidunt. Donec id mi in neque fringilla posuere. Aliquam efficitur lectus eget est dapibus, congue efficitur ipsum sagittis. Nam malesuada nulla diam, quis blandit diam bibendum vel. Proin venenatis vel mi sit amet commodo. Cras luctus ultricies massa, at accumsan ipsum convallis sit amet. In ornare turpis non risus laoreet, sit amet cursus sem pellentesque. Ut sit amet tellus vitae enim cursus accumsan. Aenean ac molestie elit. Donec sed tellus imperdiet, tempor lectus vel, dignissim magna. Vivamus dolor metus, viverra sed condimentum vel, congue eget ante. In fringilla felis quis tortor vestibulum, id luctus erat imperdiet. Suspendisse eget nulla risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam tincidunt rhoncus leo et molestie.',
  'Donec scelerisque tempus arcu, vitae dapibus leo vestibulum nec. Nulla lacinia suscipit augue eget laoreet. Maecenas tristique quam eu blandit sollicitudin. Morbi in dignissim augue, sed lacinia mauris. Phasellus vulputate interdum est, id lacinia metus congue quis. Fusce commodo lectus tincidunt dapibus ullamcorper. Quisque finibus scelerisque ipsum, eget imperdiet sapien imperdiet eu. Curabitur eu metus dui.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean pharetra dui nunc, eu pellentesque libero vestibulum sed. Aliquam in imperdiet diam. Morbi porttitor ante eget enim imperdiet maximus. Aenean pellentesque tortor sit amet tellus finibus tincidunt. Donec non vehicula ligula. Duis non lobortis felis. Quisque facilisis ultricies enim, in gravida magna pretium sed. Sed in ullamcorper nunc. Phasellus ligula mi, vestibulum commodo ullamcorper eget, aliquet et nibh. Mauris sed ultrices nisi, in convallis libero.',
  'Vivamus vitae vulputate urna, sit amet elementum nunc. Nunc auctor purus sed aliquet sagittis. Sed hendrerit dignissim augue, sed fermentum purus consequat quis. Pellentesque in egestas nisi. Vestibulum luctus dui vitae ex dictum varius. Proin felis ex, feugiat ac tortor nec, fringilla interdum dolor. Proin nisi massa, eleifend non justo vel, rhoncus iaculis libero. Curabitur dignissim lacus at nunc laoreet pellentesque. Proin non tellus ligula. Phasellus arcu diam, scelerisque et finibus sed, tempus quis nibh.',
  'Sed at diam ultrices, dictum ex eget, interdum ex. Nulla semper quis odio sit amet consequat. Duis at sagittis lacus. Etiam placerat interdum risus vel fermentum. Nam auctor ornare nisl at scelerisque. Vestibulum vestibulum purus sed massa pharetra condimentum. Pellentesque tempor interdum odio sed ultricies. Pellentesque rhoncus ac nisl in consectetur. Nam nec laoreet felis. Morbi venenatis molestie massa, eu ultrices justo placerat vitae.',
];


export default class IndeterminateExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      // awh
      refreshing: false,
      content: [fakeContent[2], fakeContent[4]],
    };
  }

  componentWillUnmount() {
    this.state.timeout && clearTimeout(this.state.timeout);
  }

  refreshLoremIpsum = () => {
    this.setState({
      refreshing: true,
      timeout: setTimeout(() => {
        this.setState({
          timeout: null,
          refreshing: false,
          content: fakeContent.filter(() => Math.floor(Math.random() * 2) + 1),
        });
      }, 6000),
    });
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <RaisedButton label="Refresh Lorem Ipsum" onClick={this.refreshLoremIpsum} />
        <h3 className="md-title" style={{ marginTop: '2em' }}>Some Amazing Content</h3>
        {this.state.refreshing && <CircularProgress key="progress" />}
        <CSSTransitionGroup
          component="article"
          className="text-container"
          transitionName="opacity"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
        >
          {content.map(content => <p key={content.charAt(0)}>{content}</p>)}
        </CSSTransitionGroup>
      </div>
    );
  }
}
