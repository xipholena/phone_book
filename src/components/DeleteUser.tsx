import React,{ useEffect} from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
//import Input from "./Input";
import store from '../redux/store'
import { useDispatch, useSelector } from "react-redux";
import {deleteUsersSuccess, deleteUser} from '../redux/actions'

const DeleteUser= (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state=> state);
  //console.log('DeleteUser',state.users.users);
  const location = useLocation();
  const params = useParams();
  //@ts-ignore
  const id = params.id.slice(1);
  const match = useRouteMatch();
  useEffect(() => {
    //@ts-ignore
    //console.log(params.id.slice(1));
    // dispatch(deleteUsersSuccess(id, currentUsers))
    dispatch(deleteUser(id))
  }, [])

  useEffect(() =>{
    history.push('/')
  }, [state])

  return (
    <>
      <div className="container">
        
      </div>
    </>
  )
}
export default DeleteUser;




