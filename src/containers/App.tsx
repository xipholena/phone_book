import React, { useState, FC, useEffect } from 'react';
import './App.css';
import { Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import SignIn from '../components/SignIn';
import Book from '../components/Book';
import Home from './Home';

import { logUser, setPhones } from '../reducers';
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
const mapStateToProps = (state: any) => {
  console.log('App', state)
  return {
    phones: state.setPhones.phones,
    isLogged: state.logUser.isLogged,
    form: state.form
  };
};
const mapDispatchToProps = (dispatch: any) => {
  //call reducers with DOM events to App props
  return {
    onLogUser: () => dispatch(logUser()),
    //onSetPhones: () => dispatch(setPhones()),
  };
};
const App = ({ phones }: { phones: Array<IPerson> }, onSetPhones: any): React.ReactElement => {

  useEffect(() => {
    console.log(onSetPhones);
  }, []);
  return (
    <Switch>
      <PublicRoute restricted={false} component={Home} path='/home' exact />
      <PublicRoute restricted={true} component={SignIn} path='/login' exact />
      <PrivateRoute component={Book} path='/' exact phones={phones} />
      <Redirect path='/phone_book' to='/login' />
    </Switch>
  );
};
/*getPhonesHandler = {onSetPhones}*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
