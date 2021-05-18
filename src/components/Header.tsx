import React, {FC} from 'react';

const Header: FC = () => {
    return (
        <div className="container">
            <header className="header">
                <p>Logo</p>
                <button
                    className="header__log-link"

                >
                    Sign in
                </button>
            </header>
        </div>
    )
}

export default Header;