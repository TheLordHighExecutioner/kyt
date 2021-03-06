import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Tools from '../components/Tools';

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../components/Home');    // eslint-disable-line global-require
  require('../components/Home');   // eslint-disable-line global-require
}

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="tools" component={Tools} />
  </Switch>
);
