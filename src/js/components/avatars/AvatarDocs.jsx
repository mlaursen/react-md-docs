import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import AvatarExamples from './AvatarExamples';
import AvatarExamplesRaw from '!!raw!./AvatarExamples';
import Avatar from './AvatarDocgen.json';

export default class AvatarDocs extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
