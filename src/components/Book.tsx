import React, { useEffect } from 'react';
import { IPerson } from '../containers/App';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions";
import {ROUTES} from "../constants";
import {RootState} from "../reducers";

interface BookProps {
  phones: Array<IPerson>;
}


const Book = (): React.ReactElement => {
 const dispatch = useDispatch();
 const phones = useSelector((state: RootState | any) => state.users.users.phones?.sort((a: any, b: any) => a.name.last.localeCompare(b.name.last)))
    const users = useSelector((state: RootState | any) => state.users.users);
  const loading = useSelector((state: RootState | any)=> state.users.loading);
  const error = useSelector((state: RootState | any) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [])


  return (
    <main className='main'>
        <div className="bg">
          <div className='container'>
              <Link to={{pathname: ROUTES.home}} className='main__link'>Go home</Link>
          </div>
        </div>
        <div className='container'>
            {loading
                ?  <p>Wait for it...</p>
                :  (
                    <ul>
                        {phones?.map(({id, name, phone}: IPerson, i: number) => {
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
                )
            }

      </div>
    </main>
  );
};

export default Book;
