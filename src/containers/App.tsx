import React, {useState, useEffect, FC} from 'react';
import './App.css';

import Header from '../components/Header';
import Book from '../components/Book';

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

const App: FC = () => {
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
    useEffect(() => {
        getPhonesHandler();
    }, [])


    return (
    <div>
      <Header/>
      <Book phones={phones}/>
    </div>
    );

}

export default App;
