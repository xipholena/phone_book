import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";


function FormAdd() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const emailValue = watch('email');

  const handleLogin = ():void => {
    alert('ola add')
  };
  return (
    <>
      <div className="container">
        <form className="add-form" onSubmit={handleSubmit(handleLogin)}>

          <input
            type="text"
            placeholder="First name"
            className="add-form__field"

            {...register('firstName', {})}
          />

          <input
            type="text"
            placeholder="Last name"
            className="add-form__field"

            {...register('lastName', {})}
          />

            <select
              className="add-form__field"
              {...register('status', {})}
            >
              <option value="">active</option>
              <option value="">not active</option>
            </select>


          <input
            type="number"
            placeholder="Age"
            className="add-form__field"

            {...register('age', {
              validate: {
                required: (value: any) => value.length || 'This field is required',
                isCorrect: (value: any) => +value >= 1 && +value <= 120|| 'Your age must be 1 to 120 years',
              },
            })}
          />
          {errors.age?.message && <span>{errors.age?.message}</span>}


          <input
            type="text"
            placeholder="Company"
            className="add-form__field"

            {...register('company', {})}
          />

          <input
            type="text"
            placeholder="Email"
            className="add-form__field"

            {...register('email', {
              validate: {
                required: (value: any) => value.length || 'This field is required',
                isCorrect: (value: any) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Invalid email address',
              },
            })}
          />
          {errors.email?.message && <span>{errors.email?.message}</span>}

          <input
            type="text"
            placeholder="Phone"
            className="add-form__field"

            {...register('phone', {
              validate: {
                required: (value: any) => value.length || 'This field is required',
                isCorrectLength: (value: any) => value.match(/[0-9]/g).join('').length !== 11 || 'Phone number must contain 11 digits',
                startsCorrectly: (value: any) => value.slice(0,1) === '1' || value.slice(1,2) === '1' || 'Phone number must start with 1',
              },
            })}
          />
          {errors.phone?.message && <span>{errors.phone?.message}</span>}

          <input
            type="text"
            placeholder="Address"
            className="add-form__field"
            {...register('address', {})}
          />

          <input
            type="text"
            placeholder="Registered"
            className="add-form__field"

            {...register('registered', {})}
          />

          <button
            className="form__button"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default FormAdd;
/*
validate: {
  required: (value: any) => value.length || 'This field is required',
    isCorrect: (value: any) => +value >= 1 && +value <= 120|| 'Your age must be 1 to 120 years',
}

validate: {
  required: (value: any) => value.length || 'This field is required',
    isCorrect: (value: any) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Invalid email address',
}

validate: {
  required: (value: any) => value.length || 'This field is required',
  isCorrectLength: (value: any) => value.match(/[0-9]/g).join('').length !== 11 || 'Phone number must contain 11 digits',
  startsCorrectly: (value: any) => value.slice(0,1) === '1' || value.slice(1,2) === '1' || 'Phone number must start with 1',
}
 */
