import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../redux/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
type PublicRouteProps = {
  component: any;
  restricted: boolean;
  path: string;
  exact: boolean;
};

const PublicRoute = ({ component: Component, restricted, ...rest }: PublicRouteProps): React.ReactElement => {
  const state = useSelector((state: RootState) => state);
  return (
    <Route
      {...rest}
      render={props =>
        state.logUser.isLogged && restricted ? <Redirect to={{ pathname: ROUTES.main }} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
