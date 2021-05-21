import React, {FC} from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import store from "../store";
import {logIn} from "../actions";
import {loginToStorage} from "../utils";

const required = (value: string) => !value ? 'Please provide us your data' : undefined
const email = (value: string) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const length = (value: string) => value.length < 8 ? 'Needs at least 8 symbols' : undefined
const capital = (value: string) => value.search(/[A-Z]/) === -1 ? 'Must contain at least 1 capital letter' : undefined
const small = (value: string) => value.search(/[a-z]/) === -1 ?  'Must contain at least 1 small letter': undefined
const digits = (value: string) => value.search(/[0-9]/) === -1 ? 'Must contain at least 1 digit' : undefined

const renderField = ({ input, label, type, meta }: any) => {
    const { touched, error, warning } = meta;
    console.log(meta)
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}

;


let SignIn:FC = (props: any) => {
    const { routeProps, handleSubmit, reset, onSubmit} = props
    const state = store.getState()
    //console.log('values:', state.form.fieldLevelValidation?.values)

    //was props: RouteComponentProps
    const handleLogin = () => {
        logIn(state.form.fieldLevelValidation?.values.email);
        loginToStorage(state.form.fieldLevelValidation?.values.email);
        //routeProps.history.push('/');
        //console.log('values:', state.form.fieldLevelValidation?.values)
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <Field name="email" type="text"
                   component={renderField} label="Email"
                   validate={[required, email]}
            />
            <Field name="password" type="password"
                   component={renderField} label="Password"
                   validate={[required, length, capital, small, digits]}
            />
            <div>
                <button type="submit" >Submit</button>
                <button type="button" onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation', // a unique identifier for this form
})(SignIn)
