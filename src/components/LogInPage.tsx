import React, {FC} from "react";

const LogInPage: FC<any> = ({}): React.ReactElement => {
    return (
        <div className="log-in">
            <div className="container">
                <h1>Log-in page</h1>
                <form
                    //method="post"
                >
                    <input
                        className="log-in__input"
                        //type="email"
                        //required

                    />
                    <input
                        className="log-in__input"
                        //type="password"
                        //required

                    />
                    <button>
                        Access to phone book
                    </button>
                </form>
            </div>
        </div>
    )
}
export default LogInPage;