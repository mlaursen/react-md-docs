import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import AvatarExamples from './AvatarExamples';
import AvatarExamplesRaw from '!!raw!./AvatarExamples';
import Avatar from './AvatarDocgen.json';

export default class AvatarDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text="Avatars can be used to symbolize people or objects."
        sectionName="Avatars"
        examples={[{
          code: AvatarExamplesRaw,
          children: <AvatarExamples />,
        }]}
        docgens={Avatar}
      />
    );
  }
}
