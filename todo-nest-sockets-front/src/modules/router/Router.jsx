import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';

function Router() {
  const routesComponent = routes.map((route) => {
    const { component, exact, path } = route;

    return (
      <Route key={path} exact={exact} path={path}>
        {component}
      </Route>
    );
  });

  return (
      <ReactRouter>
        <Switch>
          {routesComponent}
        </Switch>
      </ReactRouter>
  );
}

export default Router;
