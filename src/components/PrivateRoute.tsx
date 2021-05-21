import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isInStorage } from '../utils';
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
    console.log('PrivateRoute',state?.form.fieldLevelValidation?.values?.email)
    console.log('state.logUser.isLogged', state.logUser.isLogged)
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

