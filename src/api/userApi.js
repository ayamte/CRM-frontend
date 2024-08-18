import axios from 'axios';


const rootUrl = "http://localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";


export const userLogin = async (frmData) => {
  try {
    const res = await axios.post(loginUrl, frmData);

    

    if (res.data.status === "success") {
      // Store the JWT tokens if login is successful
      sessionStorage.setItem('accessJWT', res.data.accessJWT);
      localStorage.setItem(
        'crmSite', 
        JSON.stringify({ refreshJWT: res.data.refreshJWT })
      );
    }

    console.log("Login response:", res.data);
    // Return the response data after storing tokens
    return res.data;

  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


export const fetchUser = async () => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");

    if (!accessJWT) {
      throw new Error("Token not found!");
    }

    const res = await axios.get(userProfileUrl, {
      headers: {
        Authorization: `Bearer ${accessJWT}`,
      },
    });

    console.log("Fetch user response:", res.data);
  
    return res.data;
    
  } catch (error) {
    console.error("Fetch user error:", error.message);
    throw error;
  }
};


export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
