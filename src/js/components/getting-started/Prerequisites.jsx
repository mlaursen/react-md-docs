import React from 'react';
import Markdown from '../../containers/Markdown';

import markdown from '../../../markdown/Prerequisites';

export default function Prerequisites() {
  return <Markdown markdown={markdown} className="container text-container" />;
}
