import React,{ useEffect} from "react";
import {useLocation, useParams, useRouteMatch} from 'react-router-dom'
//import Input from "./Input";
import store from '../redux/store'
import { useDispatch } from 'react-redux';
import {deleteUsersSuccess} from '../redux/actions'

const DeleteUser= (): React.ReactElement => {
  const dispatch = useDispatch();
  const state = store.getState();
  console.log('DeleteUser',state.users.users);
  const location = useLocation();
  const params = useParams();
  //@ts-ignore
  const id = params.id.slice(1);
  const match = useRouteMatch();
useEffect(() => {
  //@ts-ignore
  console.log(params.id.slice(1));
 // dispatch(deleteUsersSuccess(id, currentUsers))
 dispatch(deleteUsersSuccess(id))
}, [])
//@ts-ignore
//const deleteHandler: React.MouseEvent<HTMLButtonElement> = (id): void => {
  //@ts-ignore
   //console.log('ola delete',params.id.slice(1))
 //}
  return (
    <>
      <div className="container">
        
      </div>
    </>
  )
}
export default DeleteUser;




