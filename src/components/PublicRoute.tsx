import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isInStorage } from '../utils';
import {ROUTES} from "../constants";
import {useSelector} from "react-redux";
type PublicRouteProps = {
  component: any;
  restricted: any;
  path: string;
  exact: boolean;
};
const PublicRoute = ({ component: Component, restricted, ...rest }: PublicRouteProps): React.ReactElement => {
  const state: any = useSelector(state=> state);
  return (
    <Route
      {...rest}
      render={props => (state.logUser.isLogged && restricted
          ? <Redirect to={{pathname: ROUTES.main}} />
          : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
