import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

type PublicRouteProps = {
    component: any,
    restricted: any,
    path: string,
    exact: boolean
}
const PublicRoute = ({component: Component, restricted, ...rest}:PublicRouteProps ): React.ReactElement => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted
                ? <Redirect to="/dashboard" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;