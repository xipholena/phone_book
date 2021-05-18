import React, {useState, useEffect, FC} from 'react';
import axios from 'axios';

import './App.css';

import Header from '../components/Header';
import Book from '../components/Book';
import {IPerson} from "../components/Book";


const App/*: FC*/ = () => {
    const [phones, setPhones] = useState([]);

   ;


    useEffect(() => {
        fetch('https://hn.algolia.com/api/v1/search?query=redux', {
            headers: {}
        }) // http://localhost:3000/phones.json  https://hn.algolia.com/api/v1/search?query=redux
            .then((response) => response.json())
            .then((data) => setPhones(data.hits))
            .catch((e) => {
                console.log(e.toString())
            })
    }, [])

    useEffect(() => {
        console.log('phones updated, check deps array')
        //console.log(getPhonesHandler())
    },[phones])


    return (
    <div>
      <Header/>
      <Book phones={phones}/>
    </div>
    );

}

export default App;
