import { combineReducers } from "redux";
import {users} from "./reducers/users";
import {logUser} from "./reducers/logUser";

export const rootReducer = combineReducers({
  logUser,
  users,
});

export type RootState = ReturnType<typeof rootReducer>;
