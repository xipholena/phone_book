import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Select } from "./FormAddComponents";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { showFormErrors } from "../redux/actions";


function FormAdd({defaultValues}: any) {
  // @ts-ignore
  const errors = useSelector(state => state.showFormErrors.errors);
  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    // @ts-ignore
    console.log('errors mail', errors.email?.message);
    console.log('errors age', errors.age?.message);
    console.log('errors age', errors.phone?.message);
  })
  return (
    <>
      <Form onSubmit={onSubmit}>

        <Input
          type="text"
          name="firstName"
          placeholder="First name"
        />

        <Input
          type="text"
          name="lastName"
          placeholder="Last name"
        />

        <Input
          type="number"
          name="age"
          placeholder="Age"
          validate={
            {
              validate: {
                required: (value: any) => value.length || 'This field is required',
                isCorrect: (value: any) => +value >= 1 && +value <= 120|| 'Your age must be 1 to 120 years',
              }
            }
          }
        />
        {errors.age?.message && <span>{errors.age?.message}</span>}

        <Select
          name="status"
          options={["active", "not active"]}
        />

        <Input
          type="text"
          name="company"
          placeholder="Company"
        />

        <Input
          type="text"
          name="email"
          placeholder="Email"
          validate={
            {
              validate: {
                required: (value: any) => value.length || 'This field is required',
                isCorrect: (value: any) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Invalid email address',
              }
            }
          }
        />
        {errors.email?.message && <span>{errors.email?.message}</span>}

        <Input
          type="text"
          name="phone"
          placeholder="Phone"
          validate={
            {
              validate: {
                required: (value: any) => value.length || 'This field is required',
                isCorrectLength: (value: any) => value.match(/[0-9]/g).join('').length !== 11 || 'Phone number must contain 11 digits',
                startsCorrectly: (value: any) => value.slice(0,1) === '1' || value.slice(1,2) === '1' || 'Phone number must start with 1',
              }
            }
          }
        />
        {errors.phone?.message && <span>{errors.phone?.message}</span>}

        <Input
          type="text"
          name="address"
          placeholder="Address"
        />

        <Input
          type="text"
          name="registered"
          placeholder="Registered"

        />

        <button
        className="form__button"
        >
          Submit
        </button>
      </Form>
    </>
  );
}
export default FormAdd;