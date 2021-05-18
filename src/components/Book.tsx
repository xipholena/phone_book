import React, {FC} from 'react';

interface IName {
    first: string,
    last: string
}

export interface IPerson {
    id: string,
    isActive: boolean,
    age: number,
    name: IName,
    company: string,
    email: string,
    phone: string,
    address: string,
    registered: string
}
// @ts-ignore
const Book = ({phones}/*:{ phones: Array<IPerson> }*/) => {
    console.log('Render Book', phones)
    return (
        <main className="main">
            <ul>
                {phones?.map( (phone: any) => {
                    <li key={phone.id}></li>
                })}
            </ul>
        </main>
    )
}

export default Book;