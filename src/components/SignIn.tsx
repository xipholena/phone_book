import React, {FC, useEffect} from 'react'
import store from "../store";
//import {LOG_IN} from "../constants";
import {logIn} from "../actions";
import {loginToStorage} from "../utils";
import {useForm} from "react-hook-form";
import {ROUTES} from "../constants";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"

export const SignIn:FC = (props: any) => {

    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const emailValue = watch("email");
    const dispatch = useDispatch();
    //was props: RouteComponentProps
    const handleLogin = () => {
        dispatch(logIn());
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




