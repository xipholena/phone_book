import React, {useEffect } from 'react';
import './App.css';
import { Redirect, Switch } from 'react-router-dom';
import {connect, useDispatch, useSelector} from 'react-redux';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import {SignIn} from '../components/SignIn';
import {isInStorage} from "../utils";
import Book from '../components/Book';
import Home from './Home';
import {ROUTES} from "../constants";
import {logIn} from "../actions";
interface IName {
  first: string;
  last: string;
}

export interface IPerson {
  id: string;
  isActive: boolean;
  age?: number;
  name: IName;
  company?: string;
  email?: string;
  phone: string;
  address?: string;
  registered: string;
}
interface GlobalState {
    logUser: ILogUser,
    setPhones: ISetPhones,
    counter: number,
}
interface ILogUser {
    isLogged: boolean
}
interface ISetPhones {
    phones: Array<IPerson>
}

const mapStateToProps = (state: any) => ({
    phones: state.users.users.phones,
    isLogged: state.logUser.isLogged,
    form: state.form
});


const App = ({ phones }: { phones: Array<IPerson> }): React.ReactElement => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isInStorage()) {
            dispatch(logIn())
        }
    }, [dispatch])


   // console.log(isInStorage())
  return (
      <>
        <Switch>
            <PrivateRoute component={Book} path={ROUTES.main} exact  />
            <PublicRoute restricted={false} component={Home} path={ROUTES.home} exact />
            <PublicRoute restricted={true} component={SignIn} path={ROUTES.login} exact />
          <Redirect path={ROUTES.projectName} to={{pathname: ROUTES.login}} />
        </Switch>
      </>
  );
};



export default connect(mapStateToProps)(App);
