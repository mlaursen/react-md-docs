import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import Markdown from '../../containers/Markdown';
import ListExamples from './ListExamples';
import ListExamplesRaw from '!!raw!./ListExamples';
import UncontrolledNestedExample from './UncontrolledNestedExample';
import UncontrolledNestedExampleRaw from '!!raw!./UncontrolledNestedExample';
import ControlledNestedExample from './ControlledNestedExample';
import ControlledNestedExampleRaw from '!!raw!./ControlledNestedExample';

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
        components={[{
          name: 'List',
          props: [{
            name: 'subheader',
            desc: `An optional subheader text to apply to the start of the list.`,
            type: 'string',
          }, {
            name: 'primarySubheader',
            desc: `Boolean if the added subheader text should be styled with the primary
            app color.`,
            type: 'bool',
          }, {
            name: 'ordered',
            desc: `Boolean if this should be an ordered list. This will create an \`ol\` tag
            instead of an \`ul\` tag if set to true.`,
            type: 'bool',
          }, {
            name: 'textOnly',
            desc: `Boolean if this is a list that only contains text.`,
            type: 'bool',
          }],
        }, {
          name: 'List Item',
          props: [{
            name: 'component',
            desc: `An optional component to render the list item as. An example usage
            would be to use \`react-router\`'s \`Link\` component.

> When using \`react-router\`'s \`Link\` component you will have to manually set
> the \`activeClassName\` with the \`className\` props because of the \`PureRenderMixin\`.
            `,
            type: 'string || func',
            defaultValue: 'div',
          }, {
            name: 'onClick',
            desc: `A function to call when the list item is clicked.`,
            type: 'func',
          }, {
            name: 'primaryText',
            desc: 'The primary text to display.',
            type: 'string',
          }, {
            name: 'secondaryText',
            desc: `The secondary text to display in a 2-line list.`,
            type: 'string',
          }, {
            name: 'secondaryText2',
            desc: `The secondary text to dispay on the 3rd line in a 3-line list.`,
            type: 'string',
          }, {
            name: 'leftIcon',
            desc: `An icon to display the the left of the primary text.`,
            type: 'node',
          }, {
            name: 'leftAvatar',
            desc: `An avatar to display to the left of the primary text.`,
            type: 'node',
          }, {
            name: 'rightIcon',
            desc: `An icon to display to the right of the primary text.`,
            type: 'node',
          }, {
            name: 'rightAvatar',
            desc: `An avatar to display to the right of the primary text.`,
            type: 'node',
          }, {
            name: 'nestedItems',
            desc: `A list of nested \`ListItem\`. This will automatically add an expander
            button to the right of the primary text. If you want to pass props, it can automatically
            convert the property object into a \`ListItem\`, \`Divider\` or \`Subheader\`.

\`\`\`js
{ subheader: true, ...subheaderProps } // subheader
{ divider: true, ...dividerProps }     // divider
\`\`\`
`,
            type: 'arrayOf(ListItem || listItemProps)',
          }, {
            name: 'initiallyOpen',
            desc: `Boolean if the nestedItems are initially open and visible.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'expandOnClick',
            desc: `Boolean if the nested items should expand when the list item itself
            is clicked instead of only the expander button.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'expanderIconChildren',
            desc: `Any children used to display the expander icon.`,
            type: 'node',
            defaultValue: 'keyboard_arrow_down',
          }, {
            name: 'expanderIconClassName',
            desc: `The icon className to use for the expander icon.`,
            type: 'string',
            defaultValue: 'material-icons',
          }, {
            name: 'primaryAction',
            desc: `A function to call when a list item is clicked when the \`primaryActionNode\`
            is a part of the list item. This should be a function that toggles the checkbox.

> NOTE: Likely to change. Still in development
            `,
            type: 'func',
          }, {
            name: 'primaryActionNode',
            desc: `An optional checkbox to display the the left of the primary text. This
            will allow the \`ListItem\` to be a list with controls. The primary action
            node can only be a checkbox according to the material design specs.

> NOTE: Likely to change. Still in development
            `,
            type: 'node',
          }, {
            name: 'secondaryAction',
            desc: `A function to call when a list item is clicked and there is not a primaryAction.
            This should be a function to toggle the \`secondaryActionNode\`


> NOTE: Likely to change. Still in development
            `,
            type: 'func',
          }, {
            name: 'secondaryActionNode',
            desc: `An optional component to display to the right of the primary text. This
            should be a checkbox or a switch.

> NOTE: Likely to change. Still in development
            `,
            type: 'node',
          }],
        }]}
      />
    );
  }
}
