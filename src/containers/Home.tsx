import React, { Component } from 'react';
import { logoutOfStorage,  isInStorage } from '../utils';
import { Link, RouteComponentProps } from 'react-router-dom';
import store from "../store";
import {LOG_OUT} from "../constants";
import {logOut} from "../actions";

// RouteComponentProps<MatchParams>
class Home extends Component<any> {
  constructor(props: any ) {
    super(props);
  }

  handleLogout = (): void => {
    logoutOfStorage();
    logOut();
    //store.dispatch({type: LOG_OUT})
    //this.props.dispatch({type: LOG_OUT})
  };

  render(): React.ReactElement {
    const state = store.getState()
    console.log(this.props, store)
    return (
      <div>
        <h1>Home</h1>

        {state.logUser.isLogged || isInStorage()  ? (
          <button onClick={() => this.handleLogout()}>Click here to log out</button>
        ) : (
          <Link to='/login'>Go to sign in page</Link>
        )}
      </div>
    );
  }
}

export default Home;
