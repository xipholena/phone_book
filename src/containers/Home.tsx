import React, { Component } from 'react';
import { logoutOfStorage,  isInStorage } from '../utils';
import { Link} from 'react-router-dom';
import store from "../store";
//import {LOG_OUT} from "../constants";
import {logOut} from "../actions";

// RouteComponentProps<MatchParams>
const Home = () =>  {
  const handleLogout = (): void => {
    logoutOfStorage();
    logOut();
    //store.dispatch({type: LOG_OUT})
    //props.dispatch({type: LOG_OUT})
  };
  const state = store.getState()
  return (
      <div>
        <h1>Home</h1>
        {state.logUser.isLogged || isInStorage()  ? (
            <button onClick={() => handleLogout()}>Click here to log out</button>
        ) : (
            <Link to='/login'>Go to sign in page</Link>
        )}
      </div>
  );

}

export default Home;
