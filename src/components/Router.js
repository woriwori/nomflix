import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import TV from '../routes/TV';
import Search from '../routes/Search';

export default () => (
  //  exact : path 가 정확히 일치하는 경우에 routing
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);