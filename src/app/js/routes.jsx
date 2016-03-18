import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { APP_URI_BASE } from './utils';
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
import DialogDocs from './components/dialogs/DialogDocs';
import DividerDocs from './components/dividers/DividerDocs';
import FontIconDocs from './components/font-icons/FontIconDocs';
import ListDocs from './components/lists/ListDocs';

export default (
  <Route path={`${APP_URI_BASE}/`} component={App}>
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
    <Route path="components/dialogs" component={DialogDocs} />
    <Route path="components/dividers" component={DividerDocs} />
    <Route path="components/font-icons" component={FontIconDocs} />
    <Route path="components/lists" component={ListDocs} />
  </Route>
);
