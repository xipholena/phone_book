import { combineReducers } from "redux";
import {users} from "./reducers/users";
import {logUser} from "./reducers/logUser";
import { showFormErrors } from "./reducers/form";
export const rootReducer = combineReducers({
  logUser,
  users,
  showFormErrors
});

export type RootState = ReturnType<typeof rootReducer>;
