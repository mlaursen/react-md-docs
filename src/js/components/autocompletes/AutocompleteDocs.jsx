import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import MenuAutocomplete from './MenuAutocomplete';
import MenuAutocompleteRaw from '!!raw!./MenuAutocomplete';
import InlineAutocompleteExample from './InlineAutocompleteExample';
import InlineAutocompleteExampleRaw from '!!raw!./InlineAutocompleteExample';

import Autocomplete from './AutocompleteDocgen.json';

const text =`
`;

export default class AutocompleteDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Autocompletes"
        examples={[{
          code: MenuAutocompleteRaw,
          children: <MenuAutocomplete />,
        }, {
          code: InlineAutocompleteExampleRaw,
          children: <InlineAutocompleteExample />,
        }]}
        docgens={Autocomplete}
      />
    );
  }
}
