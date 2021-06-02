import React, { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { Link, useParams } from "react-router-dom";

const User: FC = () => {
  const { personId } = useParams<{personId: string}>();
  const users = useSelector((state: RootState)=> state.users.users);
  const person = useMemo(() => users?.find(u => u.id === personId), [users, personId]);

  const params = useParams();
  useEffect(() => {
    console.log('personId', personId);
    console.log('person', person);
  })
  return person
    ? (
    <>
      <div className="container">
        <Link to={`/edit/:${person.id}`} className="form__button">Edit user </Link>
        <div className="person">
          <h1>{person.name.first} {person.name.last}</h1>
          <p>
            <span className="person__info-title">id:  </span>
            <span className="person__info-description">{person.id}</span>
          </p>
          <p>
            <span className="person__info-title">Status:  </span>
            <span className="person__info-description">{person.isActive? `active` : `not active`}</span>
          </p>
          <p>
            <span className="person__info-title">Age:  </span>
            <span className="person__info-description">{person.age}</span>
          </p>
          <p>
            <span className="person__info-title">Company:  </span>
            <span className="person__info-description">{person.company}</span>
          </p>
          <p>
            <span className="person__info-title">Email:  </span>
            <span className="person__info-description">{person.email}</span>
          </p>
          <p>
            <span className="person__info-title">Phone:  </span>
            <span className="person__info-description">{person.phone}</span>
          </p>
          <p>
            <span className="person__info-title">Address: </span>
            <span className="person__info-description">{person.address}</span>
          </p>
          <p>
            <span className="person__info-title">Registered:  </span>
            <span className="person__info-description">{person.registered}</span>
          </p>
        </div>
      </div>
    </>
  )
    : <h1>Sorry, something went wrong</h1>
};

export default User;