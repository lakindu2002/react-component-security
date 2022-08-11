import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to="/forbidden`" />
    }
  />;
};

export const Nav = () => {
  return <GuardedRoute 
    auth={true}
    component={() => <h1>Have Access To Nuclear Bomb Management</h1>}
    path={'/bomb-management'}
  />;
};
