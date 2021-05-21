import React, {useEffect} from 'react';
import { login } from '../utils';
import { RouteComponentProps } from 'react-router-dom';
import { reduxForm, change, formValues, Field } from 'redux-form';

/*interface SignInProps  {
    routeProps?: RouteComponentProps,
    inputEmailValidator?: () => void,
}*/


const RenderField = (meta: any) => {
  useEffect(() => {
    console.log( meta, meta.meta.warning)
  })

  return (
      <>
        <input
            type="text"
        />
        {meta.meta.touched && (meta.meta.error && <span>{meta.meta.error}</span>)}
      </>
  )
}

export const SignIn = ({ routeProps, handleSubmit, pristine, reset, submitting }: any): React.ReactElement => {
  //was props: RouteComponentProps
  /*const handleLogin = () => {
    login();
    routeProps.history.push('/');
  };*/

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}> {/*must from redux-form library, provided and must be accepted in props*/}
        <Field
          name='emailField' //Equals to values.emailField in validator
          type='text'
          component={RenderField} // Field = HOC, component = component to wrap
          validate={[required, email]}
        />
        <Field
          name='passwordField' //Equals to values.passwordField in validator
          type='text'
          component={RenderField} // Field = HOC, component = component to wrap
          validate={[required, length, capital, small, digits]}
        />
        <button type="button">Click here to log in</button>

      </form>
    </div>
  );
};

interface ValidationValues {
  emailField?: string; //unnecessary because errors object initially empty
  passwordField?: string;
}
const required = (value: string) => !value ? 'Please provide us your email' : undefined
const email = (value: string) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const length = (value: string) => value.length < 8 ? 'Needs at least 8 symbools' : undefined
const capital = (value: string) => value.search(/[A-Z]/) ? 'Must contain at least 1 capital letter' : undefined
const small = (value: string) => value.search(/[a-z]/) ?  'Must contain at least 1 small letter': undefined
const digits = (value: string) => value.search(/[0-9]/)? 'Must contain at least 1 digit' : undefined
export default reduxForm({
  form: 'fieldLevelValidation', //equals dispatched changes // a unique identifier for this form
  /*initialValues: {
    emailField: '',
    passwordField: '',
  },*/


  /*validate: (values: ValidationValues) => {
    //DOM e.target.value?
    const errors: ValidationValues = {}; //collecting errors to display
    if (!values.emailField) {
      errors.emailField = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
      errors.emailField = 'Invalid email address';
    }

    if (!values.passwordField) {
      errors.passwordField = 'Password Required';
    } else if (values.passwordField.length < 8) {
      errors.passwordField = 'Needs at least 8 symbools';
    } else if (values.passwordField.search(/[A-Z]/) === -1) {
      errors.passwordField = 'Must contain at least 1 capital letter';
    } else if (values.passwordField.search(/[a-z]/) === -1) {
      errors.passwordField = 'Must contain at least 1 small letter';
    } else if (values.passwordField.search(/[0-9]/) === -1) {
      errors.passwordField = 'Must contain at least 1 digit';
    }
    return errors;
  },*/
})(SignIn);

//export default SignIn; //Module cannot have multiple default exports
