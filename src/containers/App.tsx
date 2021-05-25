import React, {useEffect } from 'react';
import './App.css';
import { Redirect, Switch } from 'react-router-dom';
import {connect, useSelector} from 'react-redux';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import SignIn from '../components/SignIn';
import Book from '../components/Book';
import Home from './Home';
import store from "../store";
import {ROUTES} from "../constants";
import {sagaAction} from "../store";

interface IName {
  first: string;
  last: string;
}

export interface IPerson {
  id: string;
  isActive: boolean;
  age?: number;
  name: IName;
  company?: string;
  email?: string;
  phone: string;
  address?: string;
  registered: string;
}
interface GlobalState {
    logUser: ILogUser,
    setPhones: ISetPhones,
    counter: number,
}
interface ILogUser {
    isLogged: boolean
}
interface ISetPhones {
    phones: Array<IPerson>
}
interface CounterProps { //saga demo component props
    value: GlobalState,
    onIncrement: () => any,
    onDecrement: () => any,
    onIncrementAsync: () => any,
}
const mapStateToProps = (state: any) => ({
    phones: state.setPhones.phones,
    isLogged: state.logUser.isLogged,
    form: state.form
});


const App = ({ phones }: { phones: Array<IPerson> }): React.ReactElement => {
    const state = useSelector(state => state)
  return (
      <>
        <Switch>
          <PublicRoute restricted={false} component={Home} path={ROUTES.home} exact />
          <PublicRoute restricted={true} component={SignIn} path={ROUTES.login} exact />
          <PrivateRoute component={Book} path={ROUTES.main} exact phones={phones} />
          <Redirect path={ROUTES.projectName} to={{pathname: ROUTES.login}} />
        </Switch>
          <Counter
              value={state as GlobalState}
              onIncrement={() => sagaAction('INCREMENT')}
              onDecrement={() => sagaAction('DECREMENT')}
              onIncrementAsync={() => sagaAction('INCREMENT_ASYNC')} />,
      </>
  );
};

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }: CounterProps) => {
    //console.log(value,  onIncrement, onDecrement, onIncrementAsync) //global state
    return (
        <div>
            <button onClick={onIncrementAsync}>
                Increment after 1 second
            </button>
            {' '}
            <button onClick={onIncrement}>
                Increment
            </button>
            {' '}
            <button onClick={onDecrement}>
                Decrement
            </button>
            <hr />
            <div>
                Clicked: {value.counter} times
            </div>
        </div>
    )
}

/*getPhonesHandler = {onSetPhones}*/
export default connect(mapStateToProps)(App);
