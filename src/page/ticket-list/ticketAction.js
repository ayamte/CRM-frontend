import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
} from "./ticketSlice";
import {getAllTickets} from "../../api/ticketApi"




export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    
    if (result.result.length) {
  dispatch(fetchTicketSuccess(result.result));
}
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};



export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};



