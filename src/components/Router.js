import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import TV from '../routes/TV';
import Search from '../routes/Search';
import Detail from '../routes/Detail';
import Collection from '../routes/Collection';
import Header from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  //  exact : path 가 정확히 일치하는 경우에 routing
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Route path="/collection/:id" component={Collection} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
