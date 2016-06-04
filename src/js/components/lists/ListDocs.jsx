import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import Markdown from '../../containers/Markdown';
import ListExamples from './ListExamples';
import ListExamplesRaw from '!!raw!./ListExamples';
import ListControlsExamples from './ListControlsExamples';
import ListControlsExamplesRaw from '!!raw!./ListControlsExamples';
import UncontrolledNestedExample from './UncontrolledNestedExample';
import UncontrolledNestedExampleRaw from '!!raw!./UncontrolledNestedExample';
import ControlledNestedExample from './ControlledNestedExample';
import ControlledNestedExampleRaw from '!!raw!./ControlledNestedExample';

import List from './ListDocgen.json';

const text = `
Lists present multiple line items vertically as a single continuous element.
`;

const uncontrolledMarkdown = `
A nested list can be uncontrolled or controlled. The most simple is to
allow the list to be uncontrolled. This means that the \`ListItem\`
will control the state of whether the nested items are visible or not.
`;

const controlledMarkdown = `
A controlled list will force you to manually manage the state. The controlled
list example will also demo how to use controlled checkboxes as the primary
action for list items. Checkboxes in lists are currently only available if
you want to manually control them by passing a \`primaryAction\`
function and a \`primaryActionNode\`.
`;

export default class ListDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Lists"
        examples={[{
          name: 'Simple Examples',
          code: ListExamplesRaw,
          children: <ListExamples />,
        }, {
          name: 'Lists with Controls',
          code: ListControlsExamplesRaw,
          children: <ListControlsExamples />,
        }, {
          name: 'Uncontrolled Nested List Examples',
          code: UncontrolledNestedExampleRaw,
          children: (
            <div>
              <Markdown markdown={uncontrolledMarkdown} />
              <UncontrolledNestedExample />
            </div>
          ),
        }, {
          name: 'Controlled Nested List Examples',
          code: ControlledNestedExampleRaw,
          children: (
            <div>
              <Markdown markdown={controlledMarkdown} />
              <ControlledNestedExample />
            </div>
          ),
        }]}
        docgens={List}
      />
    );
  }
}
