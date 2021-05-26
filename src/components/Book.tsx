import React, { useEffect } from 'react';
import { IPerson } from '../containers/App';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions";
import {ROUTES} from "../constants";

interface BookProps {
  phones: Array<IPerson>;
}


const Book = (): React.ReactElement => {
 const dispatch = useDispatch();
    // @ts-ignore
 const phones = useSelector(state => state.users.users.phones?.sort((a, b) => a.name.last.localeCompare(b.name.last)))
  // @ts-ignore
    const users = useSelector(state => state.users.users);
    // @ts-ignore
  const loading = useSelector(state => state.users.loading);
    // @ts-ignore
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [])


  return (
    <main className='main'>
      <div className='container'>
          <Link to={{pathname: ROUTES.home}} className='main__link'>Go home</Link>
        <ul>
          {phones?.map(({ id, name, phone }: IPerson, i: number) => {
            if (phones[i - 1]?.name.last.slice(0, 1) !== phones[i]?.name.last.slice(0, 1)) {
              return (
                <li key={id} className='withSeparator'>
                  <p>{phones[i].name.last.slice(0, 1)} </p>
                  <ul className='firstInRow'>
                    <li>
                      {name.last} {name.first}, phone: {phone}
                    </li>
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={id}>
                  {name.last} {name.first}, phone: {phone}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </main>
  );
};

export default Book;
