import {
  openNewTicketPending,
  openNewTicketSuccess,
  openNewTicketFail,
} from "./addTicketSlicer";
import { createNewTicket } from "../../api/ticketApi";

export const openNewTicket = (frmData) => async (dispatch) => {
  try {
    dispatch(openNewTicketPending());

    // Appel de l'API
    const result = await createNewTicket(frmData);
    console.log(result);

    if (result.status === "error") {
      dispatch(openNewTicketFail(result.message));
      return Promise.reject(result.message);
    }

    dispatch(openNewTicketSuccess(result.message));
    return Promise.resolve(result.message);

  } catch (error) {
    console.log(error);
    dispatch(openNewTicketFail(error.message));
    return Promise.reject(error.message);
  }
};
