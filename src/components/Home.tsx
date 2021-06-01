import React, {FC} from 'react';

import { Link } from 'react-router-dom';

import { logOut } from '../redux/actions';
import { ROUTES } from '../redux/constants';
import { useDispatch, useSelector } from 'react-redux';

const Home: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = (): void => {
    dispatch(logOut()); // saga watcher listens
  };
  const state: any = useSelector(state => state);
  return (
    <div>
      <h1>Home</h1>
      {state.logUser.isLogged ? (
        <button onClick={() => handleLogout()}>Click here to log out</button>
      ) : (
        <Link to={{ pathname: ROUTES.login }}>Go to sign in page</Link>
      )}
    </div>
  );
};

export default Home;
