import React from 'react';
import { login } from '../utils';
import {RouteComponentProps} from 'react-router-dom'
const SignIn = (props: RouteComponentProps): React.ReactElement => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }
    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={() => handleLogin()}>Click here to log in</button>
        </div>
    );
};

export default SignIn;