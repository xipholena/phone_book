import React, {useState, FC} from 'react';
import './App.css';
import {Redirect, Switch} from 'react-router-dom';

import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";
import SignIn from "../components/SignIn";
import Book from "../components/Book";
import Home from "./Home";
interface IName {
    first: string,
    last: string
}

export interface IPerson {
    id: string,
    isActive: boolean,
    age?: number,
    name: IName,
    company?: string,
    email?: string,
    phone: string,
    address?: string,
    registered: string
}

const App: FC = (): React.ReactElement => {
    const [phones, setPhones] = useState<Array<IPerson>>([]);

   async function getPhonesHandler(){
       return fetch('http://localhost:3000/phones.json', {
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
           }
       })
           .then((response) => response.json())
           .then((data) => setPhones(data.phones))
           .catch((e) => {
               console.log(e.toString())
           })
   }



    return (
        <Switch>
            <PublicRoute  restricted={false} component={Home} path="/" exact />
            <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
            <PrivateRoute
                component={Book} path="/dashboard" exact
                phones={phones} getPhonesHandler={getPhonesHandler}
            />
            <Redirect path="/phone_book" to='/'/>
        </Switch>

    );

}

export default App;
