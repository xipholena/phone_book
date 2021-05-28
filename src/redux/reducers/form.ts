import { Reducer } from "redux";
import { SHOW_FORM_ERRORS } from "../constants";
import { initialStateLogUser, LogUserArgsType } from "./logUser";

const initialStateFormErrors = {
  errors: {}
}
export const showFormErrors: Reducer<any, any> = (state = initialStateFormErrors, action):any => {
  switch (action.type) {
    case SHOW_FORM_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};