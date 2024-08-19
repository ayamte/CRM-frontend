import axios from 'axios';

export const getAllTickets = async () => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    
    if (!accessJWT) {
      throw new Error("No access token found");
    }


    const result = await axios.get("http://localhost:3001/v1/ticket", {
      headers: {
        Authorization: `Bearer ${accessJWT}`,
      },
    });

    console.log("API response:", result.data);
    return result.data;
  } catch (error) {
    // throw error;
    console.error("Error in getAllTickets:", error.response ? error.response.data : error.message);
    throw error;
  }
};


export const getSingleTicket = async (_id) => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    
    if (!accessJWT) {
      throw new Error("No access token found");
    }


    const result = await axios.get(`http://localhost:3001/v1/ticket/${_id}`, {
      headers: {
        Authorization: `Bearer ${accessJWT}`,
      },
    });
    

    console.log("API response:", result.data);
    return result.data;
  } catch (error) {
    // throw error;
    console.error("Error in getAllTickets:", error.response ? error.response.data : error.message);
    throw error;
  }
};


export const updateReplyTicket = async (_id, msgObj) => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    
    if (!accessJWT) {
      throw new Error("No access token found");
    }


    const result = await axios.put(
      `http://localhost:3001/v1/ticket/${_id}`, 
      msgObj,
      {
      headers: {
        Authorization: `Bearer ${accessJWT}`,
      },
      
    });
    

    console.log("API response:", result.data);
    return result.data;
  } catch (error) {
    // throw error;
    console.error("Error in getAllTickets:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateTicketStatusClosed = async (_id) => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    
    if (!accessJWT) {
      throw new Error("No access token found");
    }


    const result = await axios.patch(
      `http://localhost:3001/v1/ticket/close-ticket/${_id}`,
      {}, 
      {
      headers: {
        Authorization: `Bearer ${accessJWT}`,
      },
      
    });
    

    console.log("API response:", result.data);
    return result.data;
  } catch (error) {
    // throw error;
    console.error("Error in getAllTickets:", error.response ? error.response.data : error.message);
    throw error;
  }
};