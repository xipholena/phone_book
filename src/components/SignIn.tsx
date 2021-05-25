import React, {FC} from 'react'
import { Field, reduxForm/*, formValueSelector */} from 'redux-form'
import store from "../store";
//import {LOG_IN} from "../constants";
import {logIn} from "../actions";
import {loginToStorage} from "../utils";
import {useForm} from "react-hook-form";
import {ROUTES} from "../constants";
import {useSelector} from "react-redux";

let SignIn:FC = (props: any) => {
    const { history, reset} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const state = useSelector(state => state);
    const emailValue = watch("email");

    //was props: RouteComponentProps
    const handleLogin = () => {
       //props.dispatch({ type: LOG_IN })
       //store.dispatch({ type: LOG_IN })
        logIn(true);
        loginToStorage(emailValue);
        history.push(ROUTES.main);
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="form"> {/* your form submit function which will invoke after successful validation*/}
            {/* register your input into the hook by invoking the "register" function */}
            <input
                {...register("email", { //name=== errors obj property containing all validation errors for this specific field
                    validate: {
                        required: value => value.length || 'This field is required', //so validation need to return false to be passed
                        isCorrect: value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Invalid email address'
                    }
                })}
                className="form__field"
            />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>{errors.email?.message}</span>} {/*errors.email?.message - one entity for all possible messages*/}
            {/* include validation with required or other standard HTML validation rules */}
            <input
                {...register("password", {
                    validate: {
                        required: value => value.length || 'This field is required',
                        length: value => value.length > 8 || 'Needs at least 8 symbols',
                        capital: value => value.search(/[A-Z]/) !== -1 || 'Must contain at least 1 capital letter',
                        small: value => value.search(/[a-z]/) !== -1 || 'Must contain at least 1 small letter',
                        digits: value => value.search(/[0-9]/) !== -1 || 'Must contain at least 1 digit',
                    }
                })}
                className="form__field"/>
            {errors.password && <span>{errors.password?.message}</span>}
            <input type="submit" className="form__button"/>
        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation', // a unique identifier for this form
})(SignIn)


