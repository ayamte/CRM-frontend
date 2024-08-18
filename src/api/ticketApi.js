import axios from 'axios';



export const getAllTickets = async () => {
  try {
    const result = await axios.get("http://localhost:3001/v1/ticket", {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });

    return result.data;
  } catch (error) {
   
    throw error; 
  }
};
