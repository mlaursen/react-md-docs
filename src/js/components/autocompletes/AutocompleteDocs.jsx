import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import MenuAutocomplete from './MenuAutocomplete';
import MenuAutocompleteRaw from '!!raw!./MenuAutocomplete';
import InlineAutocompleteExample from './InlineAutocompleteExample';
import InlineAutocompleteExampleRaw from '!!raw!./InlineAutocompleteExample';
import DataReactMixExample from './DataReactMixExample';
import DataReactMixExampleRaw from '!!raw!./DataReactMixExample';
import SpotifySearchExample from './SpotifySearchExample';
import SpotifySearchExampleRaw from '!!raw!./SpotifySearchExample';
import SpotifyAlbumRaw from '!!raw!./SpotifyAlbum';
import SpotifySCSS from '!!raw!./_spotify.scss';

import Autocomplete from './AutocompleteDocgen.json';

const spotifyCode = `
/* SpotifySearchExample.jsx */
${SpotifySearchExampleRaw}
\`\`\`

\`\`\`js
/* SpotifyAlbum.jsx */
${SpotifyAlbumRaw}
\`\`\`

\`\`\`scss
/* _spotify.scss */
${SpotifySCSS}
`;

const text =`
The \`Autocomplete\` component comes in two forms: \`Menu\` and \`Inline\` completions.

The \`Menu\` completion view is default. When the user types, any filtered (or best match)
will appear in a menu. The user can then select a value by:
- Using the up and down arrow keys to select a completion and then press enter or space to select
the value
- Using the mouse or touch to select a value

The \`Inline\` completion view can be enabled by setting the prop \`inline\` to true. This will
allow a single best match to appear inline and the user can autocomplete by using the tab key.

Since there are many different ways to filter or sort data, there are only two basic filters
included. A \`caseInsensitiveFilter\` and a \`fuzzyFilter\`. They are both pretty basic so
you might want to include another library like [fuse.js](https://github.com/krisk/Fuse) or
something else. I didn't want to force a library dependency, so it was not included.
The \`Inline\` completion view uses a simple find by best match ignoring case by default.
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
          name: 'Menu Completion View',
          code: MenuAutocompleteRaw,
          children: <MenuAutocomplete />,
        }, {
          name: 'Inline Completion View',
          code: InlineAutocompleteExampleRaw,
          children: <InlineAutocompleteExample />,
        }, {
          name: 'React Components and Data Mix Example',
          code: DataReactMixExampleRaw,
          children: <DataReactMixExample />,
        }, {
          name: 'Spotify API Filtered Example',
          code: spotifyCode,
          children: <SpotifySearchExample />,
        }]}
        docgens={Autocomplete}
      />
    );
  }
}
