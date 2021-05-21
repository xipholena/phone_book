import React, { Component } from 'react';
import { logoutOfStorage,  isInStorage } from '../utils';
import { Link, RouteComponentProps } from 'react-router-dom';
import store from "../store";

type MatchParams = {
  id: string;
};
type HomeState = {
  isLogin: boolean;
};
class Home extends Component<RouteComponentProps<MatchParams>, HomeState> {
  constructor(props: RouteComponentProps<MatchParams>) {
    super(props);

    /*this.state = {
      isLogin: isLogin(state?.form.fieldLevelValidation?.values?.email),
    };*/
  }



  handleLogout = (): void => {
    logoutOfStorage() ;
    this.setState({ //dispatch action here
      isLogin: false,
    });
  };

  render(): React.ReactElement {
    const state = store.getState()
    return (
      <div>
        <h1>Home</h1>

        {state.logUser.isLogged || isInStorage() ? (
          <button /*onClick={() => this.handleLogout()}*/>Click here to log out</button>
        ) : (
          <Link to='/login'>Go to sign in page</Link>
        )}
      </div>
    );
  }
}

export default Home;
