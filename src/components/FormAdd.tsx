import React, { useEffect } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logInRequest } from "../redux/actions";
import { useParams } from "react-router-dom";



const FormAdd = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const emailValue = watch('email');
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();

  const handleAddPerson= ():void => {
    //dispatch(); // saga watcher listens
    alert('ola FORM ADD')
  };

  return (
    <>
      <div className="container">

        <form onSubmit={handleSubmit(handleAddPerson)}
              method="post"
              className="add-form"
        >
          <p className ="edit-form__title">
            AddUser
          </p>

          <Input
            type="text"
            placeholder="First name"
            formClass="add"
          />

          <Input
            type="text"
            placeholder="Last name"
            formClass="add"
          />

          <label>
            Status
            <select name="" id="" className="edit-form__field">
              <option value="">active</option>
              <option value="">not active</option>
            </select>
          </label>

          <Input
            type="number"
            placeholder="Age"
            formClass="add"
          />

          <Input
            type="text"
            placeholder="Company"
            formClass="add"
          />

          <Input
            type="text"
            placeholder="Email"
            formClass="add"
          />

          <Input
            type="text"
            placeholder="Phone"
            formClass="add"
          />

          <Input
            type="text"
            placeholder="Address"
            formClass="add"
          />

          <Input
            type="text"
            placeholder="Registered"
            formClass="add"
          />
        </form>
      </div>
    </>
  )
}
export default FormAdd;