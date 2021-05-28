import React from "react";
import Input from "./Input";

const EditForm = (): React.ReactElement => {

  return (
    <>
      <div className="container">

        <form method="patch" className="edit-form">
          <p className ="edit-form__title">
            Edit profile
          </p>

          <Input
            type="text"
            placeholder="First name"
            formClass="edit"
          />

          <Input
            type="text"
            placeholder="Last name"
            formClass="edit"
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
            formClass="edit"
          />

          <Input
            type="text"
            placeholder="Company"
            formClass="edit"
          />

          <Input
            type="text"
            placeholder="Email"
            formClass="edit"
          />

          <Input
            type="text"
            placeholder="Phone"
            formClass="edit"
          />

          <Input
            type="text"
            placeholder="Address"
            formClass="edit"
          />

          <Input
            type="text"
            placeholder="Registered"
            formClass="edit"
          />
        </form>
      </div>
    </>
  )
}
export default EditForm;