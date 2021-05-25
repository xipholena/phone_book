import React, { Component } from 'react';
import { logoutOfStorage,  isInStorage } from '../utils';
import { Link} from 'react-router-dom';
import store from "../store";
//import {LOG_OUT} from "../constants";
import {logOut} from "../actions";
import {ROUTES} from "../constants";
import {useDispatch} from "react-redux";

// RouteComponentProps<MatchParams>
const Home = () =>  {
    const dispatch = useDispatch();

  const handleLogout = (): void => {
    logoutOfStorage();
      dispatch(logOut());
  };
  const state = store.getState();
  return (
      <div>
        <h1>Home</h1>
        {state.logUser.isLogged || isInStorage()  ? (
            <button onClick={() => handleLogout()}>Click here to log out</button>
        ) : (
            <Link to={{pathname: ROUTES.login}}>Go to sign in page</Link>
        )}
      </div>
  );

}

export default Home;
