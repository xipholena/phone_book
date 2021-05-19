import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link, RouteComponentProps } from 'react-router-dom';


type MatchParams = {
    id: string
}
type HomeState = {
    isLogin: boolean
}
class Home extends Component<RouteComponentProps<MatchParams>, HomeState> {

    constructor(props: RouteComponentProps<MatchParams>) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = ():void => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render(): React.ReactElement  {
        return (
            <div>
                <h1>Home</h1>

                {this.state.isLogin ?
                    <button onClick={() => this.handleLogout()}>Click here to log out</button>
                    : <Link to="/login">Go to sign in page</Link>
                }
            </div>
        );
    }
}

export default Home;