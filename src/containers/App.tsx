import React, {useState, useEffect, FC} from 'react';
import './App.css';
import {useHistory, Switch, Redirect, Route} from 'react-router-dom';

import Header from '../components/Header';
import Book from '../components/Book';
import LogInPage from "../components/LogInPage";
import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";
import SignIn from "../components/SignIn";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

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
    useEffect(() => {
        getPhonesHandler();
    }, [])


    return (
        <Switch>
            <PublicRoute restricted={false} component={Home} path="/" exact />
            <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
            {/*  <div>
        <Header/>
        <LogInPage/>
        <Book phones={phones}/>
         </div>*/}
        </Switch>

    );

}

export default App;
