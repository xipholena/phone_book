import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";


function FormAdd() {

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div className="container">
        <form className="add-form" onSubmit={onSubmit}>

          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="add-form__field"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="add-form__field"
          />


            <select
              className="add-form__field"
               name="status"
            >
              <option value="">active</option>
              <option value="">not active</option>
            </select>


          <input
            type="number"
            name="age"
            placeholder="Age"
            className="add-form__field"
          />
          {/*errors.age?.message && <span>{errors.age?.message}</span>*/}


          <input
            type="text"
            name="company"
            placeholder="Company"
            className="add-form__field"
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="add-form__field"
          />
          {/*errors.email?.message && <span>{errors.email?.message}</span>*/}

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="add-form__field"
          />
          {/*errors.phone?.message && <span>{errors.phone?.message}</span>*/}

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="add-form__field"
          />

          <input
            type="text"
            name="registered"
            placeholder="Registered"
            className="add-form__field"
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