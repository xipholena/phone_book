import React,{ useEffect} from "react";
import {useLocation, useParams, useRouteMatch} from 'react-router-dom'
//import Input from "./Input";

const EditForm = (): React.ReactElement => {
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
useEffect(() => {
  //@ts-ignore
  console.log(params.id.slice(1));
  
})
  return (
    <>
      <div className="container">
        {/*<form method="patch" className="edit-form">
          <p className="edit-form__title">
            Edit profile
          </p>

          <input
            type="text"
            placeholder="First name"
            formClass="edit"
          />

          <input
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

          <input
            type="number"
            placeholder="Age"
            formClass="edit"
          />

          <input
            type="text"
            placeholder="Company"
            formClass="edit"
          />

          <input
            type="text"
            placeholder="Email"
            formClass="edit"
          />

          <input
            type="text"
            placeholder="Phone"
            formClass="edit"
          />

          <input
            type="text"
            placeholder="Address"
            formClass="edit"
          />

          <input
            type="text"
            placeholder="Registered"
            formClass="edit"
          />
        </form>*/}
      </div>
    </>
  )
}
export default EditForm;




