import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { logOut } from '../redux/actions';
import { ROUTES } from '../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const Home: FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const isMakingRequest = useSelector((state: RootState) => state.logUser.isLeaving);

  const handleLogout = (): void => {
    dispatch(logOut()); // saga watcher listens
  };
  const state = useSelector((state: RootState) => state);
  return (
    <>
      <div className='home-page'>
        <div className='container'>
          <h1>Home</h1>
          {state.logUser.isLogged ? (
            <button className='home-page__button' onClick={() => handleLogout()}>
              Click here to log out
            </button>
          ) : (
            <Link className='home-page__button' to={{ pathname: ROUTES.login }}>
              Go to sign in page
            </Link>
          )}
        </div>
      </div>
      {isMakingRequest ? (
        <div className='dialog'>
          <div className='dialog__overlay'>
            <div className='dialog__window'>
              <p className='dialog__msg'>See you soon! </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
