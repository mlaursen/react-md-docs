import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SelectField from 'react-md/lib/SelectFields';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';
import Toolbar from 'react-md/lib/Toolbars';
import { RadioGroup, Radio, Checkbox } from 'react-md/lib/SelectionControls';
import Divider from 'react-md/lib/Dividers';

const FONTS = ['Calibri', 'Courier New', 'Roboto', 'Verdana'];
const FONT_SIZES = [11, 12, 14, 16, 18, 22];

const BoldIcon = <FontIcon>format_bold</FontIcon>;
const ItalicIcon = <FontIcon>format_italic</FontIcon>;
const UnderlineIcon = <FontIcon>format_underline</FontIcon>;
const AlignLeftIcon = <FontIcon>format_align_left</FontIcon>;
const AlignJustifyIcon = <FontIcon>format_align_justify</FontIcon>;
const AlignCenterIcon = <FontIcon>format_align_center</FontIcon>;
const AlignRightIcon = <FontIcon>format_align_right</FontIcon>;

export default class FakeTextEditor extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      fontFamily: FONTS[2],
      fontSize: FONT_SIZES[3],
      fontWeight: null,
      fontStyle: null,
      textDecoration: null,
      textAlign: 'left',
      padding: '1em',
      transition: 'all .3s', //woop
    };
  }

  changeTextAlign = (textAlign) => {
    this.setState({ textAlign });
  };

  render() {
    const { fontFamily, fontSize, fontWeight, fontStyle, textDecoration, textAlign } = this.state;
    return (
      <Paper>
        <Toolbar className="fake-text-editor">
          <SelectField
            menuItems={FONTS}
            itemValue="label"
            className="font-names"
            value={fontFamily}
            onChange={(fontFamily) => this.setState({ fontFamily })}
            noAutoAdjust={true}
          />
          <Divider inset vertical />
          <SelectField
            menuItems={FONT_SIZES}
            below
            className="font-sizes"
            value={fontSize}
            onChange={(fontSize) => this.setState({ fontSize })}
            noAutoAdjust={true}
          />
          <Divider inset vertical />
          <Checkbox
            uncheckedIcon={BoldIcon}
            checkedIcon={BoldIcon}
            checked={fontWeight === 'bold'}
            onChange={() => this.setState({ fontWeight: !this.state.fontWeight ? 'bold' : null })}
          />
          <Checkbox
            uncheckedIcon={ItalicIcon}
            checkedIcon={ItalicIcon}
            checked={fontStyle === 'italic'}
            onChange={() => this.setState({ fontStyle: !this.state.fontStyle ? 'italic' : null })}
          />
          <Checkbox
            uncheckedIcon={UnderlineIcon}
            checkedIcon={UnderlineIcon}
            checked={textDecoration === 'underline'}
            onChange={() => this.setState({ textDecoration: !this.state.textDecoration ? 'underline' : null })}
          />
          <Divider inset vertical />
          <RadioGroup name="text-align" onChange={this.changeTextAlign} value={textAlign} inline={true}>
            <Radio
              uncheckedIcon={AlignLeftIcon}
              checkedIcon={AlignLeftIcon}
              value="left"
            />
            <Radio
              uncheckedIcon={AlignCenterIcon}
              checkedIcon={AlignCenterIcon}
              value="center"
            />
            <Radio
              uncheckedIcon={AlignRightIcon}
              checkedIcon={AlignRightIcon}
              value="right"
            />
            <Radio
              uncheckedIcon={AlignJustifyIcon}
              checkedIcon={AlignJustifyIcon}
              value="justify"
            />
          </RadioGroup>
        </Toolbar>
        <p style={this.state}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sequitur disserendi ratio cognitioque naturae; Ergo, si semel tristior effectus est, hilara vita amissa est? Duo Reges: constructio interrete. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Hoc est non modo cor non habere, sed ne palatum quidem. At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Cur id non ita fit? Hoc simile tandem est? Aliena dixit in physicis nec ea ipsa, quae tibi probarentur; At eum nihili facit;</p>
        <p style={this.state}>Tu quidem reddes; Iam doloris medicamenta illa Epicurea tamquam de narthecio proment: Si gravis, brevis; Quid turpius quam sapientis vitam ex insipientium sermone pendere? Idemne potest esse dies saepius, qui semel fuit? Item de contrariis, a quibus ad genera formasque generum venerunt. At iam decimum annum in spelunca iacet.</p>
        <p style={this.state}>Si verbum sequimur, primum longius verbum praepositum quam bonum. Universa enim illorum ratione cum tota vestra confligendum puto. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Gerendus est mos, modo recte sentiat. Pugnant Stoici cum Peripateticis. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. Id est enim, de quo quaerimus. Non est igitur summum malum dolor. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere.</p>
      </Paper>
    );
  }
}
