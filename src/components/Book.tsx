import React from 'react';
import {IPerson} from "../containers/App";


const Book = ({phones}: {phones: Array<IPerson>}) => {
    return (
        <main className="main">
            <ul>
                {phones?.map(({id, name, phone}: IPerson) => (
                    <li key={id}>
                        {name.last} {name.first}, phone: {phone}
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Book;