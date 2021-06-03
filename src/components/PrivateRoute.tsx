import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../redux/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

type PrivateRouteProps = {
  component: any;
  path: string;
  exact?: boolean;
};

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps): React.ReactElement => {
  const state = useSelector((state: RootState) => state);

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
