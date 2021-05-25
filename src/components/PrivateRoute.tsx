import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IPerson } from '../containers/App';
import store from "../store";
import {ROUTES} from '../constants'

type PrivateRouteProps = {
  component: any;
  path: string;
  exact: boolean;
};

const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps): React.ReactElement => {
    const state: any = store.getState();
  return (
    <Route
      {...rest}
      render={props =>
          state.logUser.isLogged ? (
          <Component  {...props} />
        ) : (
          <Redirect to={{pathname: ROUTES.login}} />
        )
      }
    />
  );
};

export default PrivateRoute;

