import { combineReducers } from "redux";
import {users} from "./reducers/users";
import {logUser} from "./reducers/logUser";
import {deleteUser} from "./reducers/deleteUser";
export const rootReducer = combineReducers({
  logUser,
  users,
  deleteUser,
});

export type RootState = ReturnType<typeof rootReducer>;
