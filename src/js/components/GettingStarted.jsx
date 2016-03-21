import React from 'react';
import Markdown from '../containers/Markdown';

import markdown from '../../markdown/GettingStarted';

export default function GettingStarted() {
  return <Markdown markdown={markdown} className="container text-container" />;
}
