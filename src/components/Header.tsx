import React, {FC} from 'react';

interface Callback { //not working
    callback: () => void
}
const Header: FC<any> = ({signInHandler}): React.ReactElement => {
    return (
        <div className="container">
            <header className="header">
                <p>Logo</p>
                <button
                    className="header__log-link"
                    onClick={signInHandler}
                >
                    Sign in
                </button>
            </header>
        </div>
    )
}

export default Header;