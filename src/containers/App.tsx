import React, { useEffect } from 'react';
import './App.css';
import { Redirect, Switch, Route, useLocation } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import { SignIn } from '../components/SignIn';
import { isInStorage } from '../utils';
import Book from '../components/Book';
import Home from '../components/Home';
import User from "../components/User";
import EditForm from "../components/EditForm";
import FormAdd from "../components/FormAdd";
import { ROUTES } from '../redux/constants';
import { logInRequest } from '../redux/actions';
import { RootState } from "../redux/rootReducer";
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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInStorage()) {
      dispatch(logInRequest()); // saga watcher listens
    }
  }, [dispatch]);

  return (
    <>
      <Switch>
        <PrivateRoute component={FormAdd} path={ROUTES.add} />
        <PrivateRoute component={EditForm} path={ROUTES.dynamic.edit()} />
        <PrivateRoute component={Book} path={ROUTES.main} exact />
        <PublicRoute restricted={false} component={Home} path={ROUTES.home} exact />
        <PublicRoute restricted={true} component={SignIn} path={ROUTES.login} exact />
        <PrivateRoute component={User} path={ROUTES.dynamic.phone()} exact />

      </Switch>
    </>
  );
};

export default App;
