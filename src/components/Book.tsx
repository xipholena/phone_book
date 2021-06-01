import React, { useEffect, FC } from 'react';
import { IPerson } from '../containers/App';
import { Link, Route, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';
import { ROUTES } from '../redux/constants';
import { RootState } from '../redux/rootReducer';

const Book: FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const phones = useSelector((state: RootState | any) =>
    state.users.users?.sort((a: any, b: any) => a.name.last.localeCompare(b.name.last))
  );
  /*const phones = [
    {
      "id": "6002f201e78c3fa4e3390f93",
      "isActive": true,
      "age": 23,
      "name": {
        "first": "Sutton",
        "last": "Morris"
      },
      "company": "ZILPHUR",
      "email": "sutton.morris@zilphur.me",
      "phone": "+1 (974) 540-2046",
      "address": "374 Mill Lane, Zarephath, New Mexico, 3252",
      "registered": "2016-03-10T06:10:01.723Z"
    },
    {
      "id": "6002f201031d235c8b5edc9d",
      "isActive": true,
      "age": 37,
      "name": {
        "first": "Bruce",
        "last": "Lester"
      },
      "company": "OBONES",
      "email": "bruce.lester@obones.us",
      "phone": "+1 (971) 502-2469",
      "address": "771 Langham Street, Rodman, Louisiana, 6395",
      "registered": "2016-10-18T00:32:55.703Z"
    },
  ]*/
  const loading = useSelector((state: RootState | any) => state.users.loading);
  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);
   //@ts-ignore
   //const editHandler: React.MouseEvent<HTMLButtonElement> = (id): void => {
    //console.log('ola edit ',id)
  //}
  
   //@ts-ignore
  //const deleteHandler: React.MouseEvent<HTMLButtonElement> = (id): void => {
   // console.log('ola delete',id)
  //}
 
  

  return (
    <main className='main'>
      <div className='bg'>
        <div className='container'>
          <Link to={{ pathname: ROUTES.home }} className='main__link'>
            Go home
          </Link>
        </div>
      </div>
      <div className='container'>

        <button
          type="button"
          className="form__button"
        >
          Send contacts
        </button>

        <button
          type="button"
          className="form__button"
        >
          Update contacts
        </button>

        <button
          type="button"
          className="form__button"
        >
          Delete user
        </button>

        <Link to={ROUTES.add} className="form__button">
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
                         {/*@ts-ignore */}
                      </li> 
                      <Link to={`/edit/:${id}`} className="form__button">Edit user </Link>
                      <Link to={`/delete/:${id}`} className="form__button">delete user </Link>
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={id} className='name'>
                    <Link to={`/${id}`}>
                    {name.last} {name.first} 
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Book;
