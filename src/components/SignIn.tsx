import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = (value: string) => !value ? 'Please provide us your data' : undefined
const email = (value: string) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const length = (value: string) => value.length < 8 ? 'Needs at least 8 symbols' : undefined
const capital = (value: string) => value.search(/[A-Z]/) ? 'Must contain at least 1 capital letter' : undefined
const small = (value: string) => value.search(/[a-z]/) ?  'Must contain at least 1 small letter': undefined
const digits = (value: string) => value.search(/[0-9]/)? 'Must contain at least 1 digit' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }: any) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

//was props: RouteComponentProps
/*const handleLogin = () => {
  login();
  routeProps.history.push('/');
};*/

const SignIn = (props: any) => {
    const { routeProps, handleSubmit, reset} = props
    return (
        <form>
            <Field name="username" type="text"
                   component={renderField} label="Username"
                   validate={[required, email]}
            />
            <Field name="email" type="email"
                   component={renderField} label="Email"
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
    form: 'fieldLevelValidation' // a unique identifier for this form
})(SignIn)