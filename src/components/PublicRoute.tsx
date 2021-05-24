import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isInStorage } from '../utils';
import {ROUTES} from "../constants";
type PublicRouteProps = {
  component: any;
  restricted: any;
  path: string;
  exact: boolean;
};
const PublicRoute = ({ component: Component, restricted, ...rest }: PublicRouteProps): React.ReactElement => {
  return (
    <Route
      {...rest}
      render={props => (isInStorage() && restricted ? <Redirect to={{pathname: ROUTES.main}} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
