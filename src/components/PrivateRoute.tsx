import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
import {IPerson} from "../containers/App";

type PrivateRouteProps = {
    component: any,
    phones: Array<IPerson>,
    getPhonesHandler: any,
    path: string,
    exact: boolean
}
const PrivateRoute = ({component: Component, phones, getPhonesHandler, ...rest}: PrivateRouteProps): React.ReactElement => {
    return (
        <Route {...rest} render={props => (
            isLogin()
                ? <Component phones={phones} getPhonesHandler={getPhonesHandler} {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;