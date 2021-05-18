import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({component: Component, phones, getPhonesHandler, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component phones={phones} getPhonesHandler={getPhonesHandler} {...props} />
                : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;