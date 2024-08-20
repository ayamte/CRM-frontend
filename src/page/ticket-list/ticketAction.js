import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
} from "./ticketSlice";
import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClosed } from "../../api/ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    
    
    if (result.status === "success") {
      dispatch(fetchTicketSuccess(result.result));
    } else {
      dispatch(fetchTicketFail("Failed to fetch tickets"));
    }
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
    
    if (result.status === "success") {
      dispatch(fetchSingleTicketSuccess(
        result.result.length && result.result[0]));
    } else {
      dispatch(fetchSingleTicketFail("Failed to fetch tickets"));
    }
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateReplyTicket(_id, msgObj);
    console.log(result);
    
    if (result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    } 

    dispatch(fetchSingleTicket(_id));
    
    dispatch(replyTicketSuccess(result.message));
    
  } catch (error) {
    console.log(error.message);
    dispatch(replyTicketFail(error.message));
  }
};


export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id);
    console.log(result);
    
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    } 

    dispatch(fetchSingleTicket(_id));
    
    dispatch(closeTicketSuccess(result.message));
    
  } catch (error) {
    console.log(error.message);
    dispatch(closeTicketFail(error.message));
  }
};