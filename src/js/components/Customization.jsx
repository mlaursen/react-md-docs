import React from 'react';
import Markdown from '../containers/Markdown';

import markdown from '../../markdown/Customization';
import theme from '!!raw!md-src/_theme';
import themeMixin from '!!raw!md-src/helpers/mixins/_theme';
import media from '!!raw!md-src/_media-queries';

const defaultTheme = `
#### Default theme

\`\`\`scss
${themeMixin}


${theme}
\`\`\`
`;

const mediaQueries = `
#### Media Queries

The sass is currently set up to have very basic media queries to figure out if it is
mobile or desktop. The current breakpoint is just at \`600px\`.

If there is a component that has different mobile/desktop versions, there is a mixin in the form
of \`md-component-name-desktop\` or \`md-component-name-mobile\` that you can use.
`;

const defaultMedia = `
#### Default Media Queries

\`\`\`scss
${media}
\`\`\`
`;

export default function Customization() {
  return (
    <div className="container text-container">
      <Markdown markdown={markdown} />
      <Markdown markdown={mediaQueries} />
      <Markdown markdown={defaultTheme} />
      <Markdown markdown={defaultMedia} />
    </div>
  );
}
