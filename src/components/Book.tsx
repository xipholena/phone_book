import React from 'react';
import {IPerson} from "../containers/App";


const Book = ({phones}: {phones: Array<IPerson>}) => {
    return (
        <main className="main">
            <div className="container">
                <ul>
                    {phones?.map(({id, name, phone}: IPerson) => (
                        <li key={id}>
                            {name.last} {name.first}, phone: {phone}
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    )
}

export default Book;