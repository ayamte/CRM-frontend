import axios from 'axios';


const rootUrl = "http://localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJWT = rootUrl + "tokens";


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

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

      if (!refreshJWT) {
        reject("Token not found!");
      }

      const res = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
      }

      reject(false);
    }
  });
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
