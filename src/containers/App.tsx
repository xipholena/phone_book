import React, {useState, useEffect, FC} from 'react';

import './App.css';

import Header from '../components/Header';
import Book from '../components/Book';
import {IPerson} from "../components/Book";


const App: FC = () => {
    const [phones, setPhones] = useState/*<Array<IPerson>>*/([]);

    const getPhonesHandler = async () => {
        try {
           const data = await fetch('http://localhost:3000/phones.json') //: Promise<Array<IPerson> | undefined>
               .then(result => result.json /*<{data: Array<IPerson>}>*/ ())
               .then(data => setPhones(data.phones))
            return data
        } catch (e) {
            console.log('error', e)
        }
    }
    useEffect(() => {
        getPhonesHandler()
    })

    useEffect(() => {
        console.log(phones)
    },[phones])

    return (
    <div>
      <Header/>
      <Book phones={phones}/>
    </div>
    );

}

export default App;
