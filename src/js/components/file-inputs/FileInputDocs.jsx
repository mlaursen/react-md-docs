import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FileInputExamples from './FileInputExamples';
import FileInputExamplesRaw from '!!raw!./FileInputExamples';
import FileConverterExample from './FileConverterExample';
import FileConverterExampleRaw from '!!raw!./FileConverterExample';
import FileUploadExample from './FileUploadExample';
import FileUploadExampleRaw from '!!raw!./FileUploadExample';

import FileInput from './FileInputDocgen.json';

const text = `
The \`FileInput\` component is just a simple styling of the \`<input type="file" />\` element.
There is an additional component: \`FileUpload\` that helps with the local uploading of files.
Uploading a file to the server is not supported because I did not want to force a specific
ajax implementation or force the \`fetch\` api polyfill.
`;

export default class FileInputDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const examples = [{
      name: 'Basic File Input Example',
      code: FileInputExamplesRaw,
      children: <FileInputExamples />,
    }, {
      name: 'Linked with a TextField',
      code: FileConverterExampleRaw,
      children: <FileConverterExample />,
    }, {
      name: 'File Upload Example',
      code: FileUploadExampleRaw,
      children: <FileUploadExample />,
    }];

    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="File Inputs"
        examples={examples}
        docgens={FileInput}
      />
    );
  }
}
