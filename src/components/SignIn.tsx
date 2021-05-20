import React from 'react';
import { login } from '../utils';
import { RouteComponentProps } from 'react-router-dom';
import { reduxForm, change, formValues, Field } from "redux-form";

interface SignInProps  {
    routeProps: RouteComponentProps,
    inputEmailValidator: () => void,
}

export const SignIn = ({ routeProps, inputEmailValidator }: SignInProps): React.ReactElement => { //was props: RouteComponentProps
  /*const handleLogin = () => {
    login();
    routeProps.history.push('/');
  };*/
  return (
    <div>
      <h1>Sign in</h1>
      <form> {/*from props or from reduxForm?*/}
          <Field
              name="emailField" //Equals to values.emailField in validator
            type="text"
            component="input" // Field = HOC, component = element to wrap
          />

          <Field
              name="passwordField" //Equals to values.passwordField in validator
              type="text"
              component="input" // Field = HOC, component = element to wrap
          />
          <button>Click here to log in</button>
      </form>
    </div>
  );
};

interface ValidationValues {
    emailField?: string, //unnecessary because errors object initially empty
    passwordField?: string
}

export default reduxForm({
    form: "signIn", //equals dispatched changes // a unique identifier for this form
    initialValues: {
        emailField: '',
        passwordField: ''
    },
    onSubmit: (values:ValidationValues) => { //DOM e.target.value?
        const errors: ValidationValues = {}; //collecting errors to display
        if (!values.emailField) {
            errors.emailField = 'Email Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
            errors.emailField = 'Invalid email address'
        }

        if(!values.passwordField) {
            errors.passwordField = 'Password Required'
        } else if (values.passwordField.length < 8) {
            errors.passwordField = 'Needs at least 8 symbools'
        } else if (values.passwordField.search(/[A-Z]/) === -1) {
            errors.passwordField = 'Must contain at least 1 capital letter'
        } else if (values.passwordField.search(/[a-z]/) === -1) {
            errors.passwordField = 'Must contain at least 1 small letter'
        } else if (values.passwordField.search(/[0-9]/) === -1) {
            errors.passwordField = 'Must contain at least 1 digit'
        }
    }
})



//export default SignIn; //Module cannot have multiple default exports
