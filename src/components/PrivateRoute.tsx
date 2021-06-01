import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../redux/constants';
import { useSelector } from 'react-redux';

type PrivateRouteProps = {
  component: any;
  path: string;
  exact?: boolean;
};

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps): React.ReactElement => {
  const state: any = useSelector(state => state);

  return (
    <Route
      {...rest}
      render={props =>
        state.logUser.isLogged ? <Component {...props} /> : <Redirect to={{ pathname: ROUTES.login }} />
      }
    />
  );
};

export default PrivateRoute;
