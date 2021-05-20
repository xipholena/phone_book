import React, { useState, FC } from 'react';
import './App.css';
import { Redirect, Switch } from 'react-router-dom';
import {connect} from "react-redux";


import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import {SignIn} from '../components/SignIn';
import Book from '../components/Book';
import Home from './Home';

import {logUser, setPhones} from '../reducers'
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
    return {
        phones: state.phones,
        isLogged: state.isLogged,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    //call reducers with DOM events to App props
    return {
        onLogUser: () => dispatch(logUser()),
        onSetPhones: () => dispatch(setPhones()),
    }
}
const App = ({phones}: {phones: Array<IPerson>}, onSetPhones: any): React.ReactElement => {
  //const [phones, setPhones] = useState<Array<IPerson>>([]);

  /*async function getPhonesHandler() {
    return fetch('http://localhost:3000/phones.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setPhones(data.phones.sort((a: IPerson, b: IPerson) => a.name.last.localeCompare(b.name.last))))
      .catch(e => {
        console.log(e.toString());
      });
  }*/

  return (
    <Switch>
      <PublicRoute restricted={false} component={Home} path='/home' exact />
      <PublicRoute restricted={true} component={SignIn} path='/login' exact />
      <PrivateRoute
        component={Book}
        path='/'
        exact
        phones={phones}
        getPhonesHandler={onSetPhones}
      />
      <Redirect path='/phone_book' to='/login' />
    </Switch>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
