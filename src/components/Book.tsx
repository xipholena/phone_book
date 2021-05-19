import React, {useEffect} from 'react';
import {IPerson} from "../containers/App";

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
            </div>

        </main>
    );
};

export default Book;
