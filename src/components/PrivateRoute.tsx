import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IPerson } from '../containers/App';
import store from "../store";

type PrivateRouteProps = {
  component: any;
  phones: Array<IPerson>;
  /*getPhonesHandler: any;*/
  path: string;
  exact: boolean;
};
const PrivateRoute = ({
  component: Component,
  phones,
  /*getPhonesHandler,*/
  ...rest
}: PrivateRouteProps): React.ReactElement => {
    const state: any = store.getState();
  return (
    <Route
      {...rest}
      render={props =>
          state.logUser.isLogged ? (
          <Component phones={phones} /*getPhonesHandler={getPhonesHandler}*/ {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;

