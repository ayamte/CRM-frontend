import {
  registrationPending,
  registrationSuccess,
  registrationError,
} from "./userRegistrationSlice";

import { userRegistration } from "../../api/userApi";
export const newUserRegistration = (frmDt) => async (dispatch) => {
  try {
    dispatch(registrationPending());

    const result = await userRegistration(frmDt);
    
    if (result.status === "success") {
      dispatch(registrationSuccess(result.message));
    } else {
      dispatch(registrationError(result.message));
    }

    console.log(result); 
  } catch (error) {
    dispatch(registrationError(error.message));
    console.error(error); 
  }
};