import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/Home';
import GettingStarted from './components/GettingStarted';
import Customization from './components/Customization';
import Typography from './components/Typography';
import AvatarDocs from './components/avatars/AvatarDocs';
import FlatButtonDocs from './components/buttons/flat/FlatButtonDocs';
import RaisedButtonDocs from './components/buttons/raised/RaisedButtonDocs';
import FloatingButtonDocs from './components/buttons/floating/FloatingButtonDocs';
import IconButtonDocs from './components/buttons/icon/IconButtonDocs';
import CardDocs from './components/cards/CardDocs';
import ChipDocs from './components/chips/ChipDocs';
import DataTableDocs from './components/data-tables/DataTableDocs';
import DialogDocs from './components/dialogs/DialogDocs';
import DividerDocs from './components/dividers/DividerDocs';
import FontIconDocs from './components/font-icons/FontIconDocs';
import InkDocs from './components/inks/InkDocs';
import ListDocs from './components/lists/ListDocs';
import MenuDocs from './components/menus/MenuDocs';
import NavigationDrawerDocs from './components/navigation-drawers/NavigationDrawerDocs';
import PaperDocs from './components/papers/PaperDocs';
import DatePickerDocs from './components/pickers/date/DatePickerDocs';
import TimePickerDocs from './components/pickers/time/TimePickerDocs';
import CircularProgressDocs from './components/progress/circular/CircularProgressDocs';
import LinearProgressDocs from './components/progress/linear/LinearProgressDocs';
import SelectFieldDocs from './components/select-fields/SelectFieldDocs';
import CheckboxDocs from './components/selection-controls/checkboxes/CheckboxDocs';
import RadioDocs from './components/selection-controls/radios/RadioDocs';
import SwitchDocs from './components/selection-controls/switches/SwitchDocs';
import SidebarDocs from './components/sidebars/SidebarDocs';
import SliderDocs from './components/sliders/SliderDocs';
import SnackbarDocs from './components/snackbars/SnackbarDocs';
import TabDocs from './components/tabs/TabDocs';
import TextFieldDocs from './components/text-fields/TextFieldDocs';
import ToolbarDocs from './components/toolbars/ToolbarDocs';
import TooltipDocs from './components/tooltips/TooltipDocs';

import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="getting-started" component={GettingStarted} />
    <Route path="customization" component={Customization} />
    <Route path="typography" component={Typography} />
    <Route path="components/avatars" component={AvatarDocs} />
    <Route path="components/buttons/flat" component={FlatButtonDocs} />
    <Route path="components/buttons/raised" component={RaisedButtonDocs} />
    <Route path="components/buttons/floating" component={FloatingButtonDocs} />
    <Route path="components/buttons/icon" component={IconButtonDocs} />
    <Route path="components/cards" component={CardDocs} />
    <Route path="components/chips" component={ChipDocs} />
    <Route path="components/data-tables" component={DataTableDocs} />
    <Route path="components/dialogs" component={DialogDocs} />
    <Route path="components/dividers" component={DividerDocs} />
    <Route path="components/font-icons" component={FontIconDocs} />
    <Route path="components/inks" component={InkDocs} />
    <Route path="components/lists" component={ListDocs} />
    <Route path="components/menus" component={MenuDocs} />
    <Route path="components/navigation-drawers" component={NavigationDrawerDocs} />
    <Route path="components/papers" component={PaperDocs} />
    <Route path="components/pickers/date" component={DatePickerDocs} />
    <Route path="components/pickers/time" component={TimePickerDocs} />
    <Route path="components/progress/circular" component={CircularProgressDocs} />
    <Route path="components/progress/linear" component={LinearProgressDocs} />
    <Route path="components/select-fields" component={SelectFieldDocs} />
    <Route path="components/selection-controls/checkboxes" component={CheckboxDocs} />
    <Route path="components/selection-controls/radios" component={RadioDocs} />
    <Route path="components/selection-controls/switches" component={SwitchDocs} />
    <Route path="components/sidebars" component={SidebarDocs} />
    <Route path="components/sliders" component={SliderDocs} />
    <Route path="components/snackbars" component={SnackbarDocs} />
    <Route path="components/tabs" component={TabDocs} />
    <Route path="components/text-fields" component={TextFieldDocs} />
    <Route path="components/toolbars" component={ToolbarDocs} />
    <Route path="components/tooltips" component={TooltipDocs} />
    <Route path="*" component={NotFound} />
  </Route>
);
