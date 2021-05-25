import React, {useEffect } from 'react';
import './App.css';
import { Redirect, Switch } from 'react-router-dom';
import {connect, useSelector} from 'react-redux';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import SignIn from '../components/SignIn';
import Book from '../components/Book';
import Home from './Home';
import store from "../store";
import {ROUTES} from "../constants";
import {sagaAction} from "../store";

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
interface CounterProps { //saga demo component props
    value: GlobalState,
    onIncrement: () => any,
    onDecrement: () => any,
    onIncrementAsync: () => any,
}
const mapStateToProps = (state: any) => ({
    phones: state.users.users.phones,
    isLogged: state.logUser.isLogged,
    form: state.form
});


const App = ({ phones }: { phones: Array<IPerson> }): React.ReactElement => {
    const state = useSelector(state => state)
  return (
      <>
        <Switch>
          <PublicRoute restricted={false} component={Home} path={ROUTES.home} exact />
          <PublicRoute restricted={true} component={SignIn} path={ROUTES.login} exact />
          <PrivateRoute component={Book} path={ROUTES.main} exact  />
          <Redirect path={ROUTES.projectName} to={{pathname: ROUTES.login}} />
        </Switch>
      </>
  );
};



export default connect(mapStateToProps)(App);
