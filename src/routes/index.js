import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SigIn from '../Pages/SigIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      {/* <Route path="/register" component={SignUp} /> */}
      {/* 
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate /> */}
    </Switch>
  );
}
