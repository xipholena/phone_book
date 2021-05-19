import React, {useEffect} from 'react';
import {IPerson} from "../containers/App";
import {Link} from "react-router-dom";

interface BookProps {
    phones: Array<IPerson>,
    getPhonesHandler: () => void
}

const Book = ({phones, getPhonesHandler}: BookProps): React.ReactElement => {
    useEffect(() => {
        getPhonesHandler();
        // eslint-disable-next-line
    }, [])

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
                <Link to="/home">Go home</Link>
            </div>

        </main>
    );
};

export default Book;
