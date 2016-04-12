import React from 'react';
import Markdown from '../../containers/Markdown';

import markdown from '../../../markdown/Installation';

export default function Installation() {
  return <Markdown markdown={markdown} className="container text-container" />;
}
