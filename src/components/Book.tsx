import React, { useEffect } from 'react';
import { IPerson } from '../containers/App';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions";

interface BookProps {
  phones: Array<IPerson>;
}

const Book = ({ phones /*getPhonesHandler */ }: BookProps): React.ReactElement => {
 const dispatch = useDispatch();
  // @ts-ignore
    const users = useSelector(state => state.users.users);
    // @ts-ignore
  const loading = useSelector(state => state.users.loading);
    // @ts-ignore
  const error = useSelector(state => state.users.error);

  useEffect(() => {
      alert('ola book')
    dispatch(getUsers());
  }, [])

  return (
    <main className='main'>
      <div className='container'>
        <ul>
          {phones?.map(({ id, name, phone }: IPerson, i) => {
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
        <Link to='/home'>Go home</Link>
      </div>
    </main>
  );
};

export default Book;
