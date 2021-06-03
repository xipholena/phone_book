import React, { FC } from 'react';
import { IPerson } from '../containers/App';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/actions';
import { ROUTES } from '../redux/constants';
import { RootState } from '../redux/rootReducer';

const Book: FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const phones = useSelector((state: RootState) =>
    state.users.users?.sort((a: IPerson, b: IPerson) => a.name.last.localeCompare(b.name.last))
  );

  const loading = useSelector((state: RootState) => state.users.loading);
  const isMakingRequest = useSelector((state: RootState) => state?.users.isMakingRequest);

  const deleteHandler: any = (e: any, id: any): void => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <main className='main'>
        <div className='bg'>
          <div className='container'>
            <Link to={{ pathname: ROUTES.home }} className='main__link'>
              Go home
            </Link>
          </div>
        </div>
        <div className='container'>
          <Link to={ROUTES.add} className='form__button'>
            Add user
          </Link>

          {loading ? (
            <p>Wait for it...</p>
          ) : (
            <ul>
              {phones?.map(({ id, name, phone }: IPerson, i: number) => {
                if (phones[i - 1]?.name.last.slice(0, 1) !== phones[i]?.name.last.slice(0, 1)) {
                  return (
                    <li key={id} className='withSeparator'>
                      <p>{phones[i].name.last.slice(0, 1)} </p>
                      <ul className='firstInRow'>
                        <li className='name'>
                          <Link to={`/${id}`}>
                            {name.last} {name.first}
                          </Link>
                          <button onClick={e => deleteHandler(e, id)} type='button' className='form__button'>
                            Delete user{' '}
                          </button>
                        </li>
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <>
                      <li key={id} className='name'>
                        <Link to={`/${id}`}>
                          {name.last} {name.first}
                        </Link>
                        <button onClick={e => deleteHandler(e, id)} type='button' className='form__button'>
                          Delete user{' '}
                        </button>
                      </li>
                    </>
                  );
                }
              })}
            </ul>
          )}
        </div>
      </main>
      {isMakingRequest ? (
        <div className='dialog'>
          <div className='dialog__overlay'>
            <div className='dialog__window'>
              <p className='dialog__msg'>Removing user...</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Book;
