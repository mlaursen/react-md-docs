import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import PlainTableExample from './PlainTableExample';
import PlainTableExampleRaw from '!!raw!./PlainTableExample';
import DataTableExample from './DataTableExample';
import DataTableExampleRaw from '!!raw!./DataTableExample';
import ComplexDataTableComments from './ComplexDataTableComments';
import ComplexDataTableCommentsRaw from '!!raw!./ComplexDataTableComments';

const text = `
Data tables display raw data sets. They usually appear in desktop enterprise products.

The \`react-md\` data tables come in two types: \`plain\` and \`selectable\`. A plain
data table will exclude just display all the data without the ability to select each row.
A selectable data table will allow the selecting of rows.

If you want to have a plain data table, you might need to update the styling for
\`.md-table-data\`. It sets the height to \`$md-height\` and does not allow line wrapping.
To have a multiline plain table, you will need to update the styles to be something like this:

\`\`\`scss
.YOUR_TABLE_CLASS_NAME .md-table-data {
  height: initial;
  white-space: normal;

  > * {
    min-height: $md-height;
  }
}
\`\`\`

The cell content should then be wrapped in some sort of element to get the styling.
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
          name: 'Plain Table Example',
          code: PlainTableExampleRaw,
          children: <PlainTableExample />,
        }, {
          name: 'Selectable Table Example',
          code: DataTableExampleRaw,
          children: <DataTableExample />,
        }, {
          name: 'Complex Table Example',
          code: ComplexDataTableCommentsRaw,
          children: <ComplexDataTableComments />,
        }]}
        components={[{
          name: 'DataTable',
          props: [],
        }]}
      />
    );
  }
}
