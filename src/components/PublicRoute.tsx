import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isInStorage } from '../utils';
import store from "../store";

type PublicRouteProps = {
  component: any;
  restricted: any;
  path: string;
  exact: boolean;
};
const PublicRoute = ({ component: Component, restricted, ...rest }: PublicRouteProps): React.ReactElement => {
  const state: any = store.getState()
  //console.log(state)
  return (
    <Route
      {...rest}
      render={props => (isInStorage() && restricted ? <Redirect to='/' /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
