import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';

type InputProps = {
  type: string,
  placeholder: string,
  formClass: string,
}
const Input = ({type, placeholder, formClass}: InputProps): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log(errors);
  })
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`${formClass}-form__field`}

        {...register('email', {
          //name=== errors obj property containing all validation errors for this specific field
          validate: {
            required: value => value.length || 'This field is required', //so validation need to return false to be passed
            isCorrect: value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Invalid email address',
          },
        })}
      />
      {errors.email && <span>{errors.email?.message}</span>}
      </>

  )
}

export default Input;