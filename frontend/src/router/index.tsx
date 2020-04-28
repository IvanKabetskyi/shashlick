import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Login from '../pages/Login';

import BidPage from '../pages/BidPage';

const Router = (): JSX.Element => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/bid-list" component={BidPage} />
        {/*<Route component={NotFound} />*/}
    </Switch>
);

export default Router;
