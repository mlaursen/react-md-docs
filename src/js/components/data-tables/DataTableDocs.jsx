import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import DataTableExamples from './DataTableExamples';
import DataTableExamplesRaw from '!!raw!./DataTableExamples';

const text = `
#### STILL A WORK IN PROGRESS

Should not use it at this time.
`;

export default class DataTableDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Data Tables"
        examples={[{
          code: DataTableExamplesRaw,
          children: <DataTableExamples />,
        }]}
        components={[{
          name: 'DataTable',
          props: [],
        }]}
      />
    );
  }
}
