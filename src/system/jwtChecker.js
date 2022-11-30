import jwtDecode from "jwt-decode";

const jwtCheck = () => {
  if (
    localStorage.getItem("accessToken") &&
    jwtDecode(localStorage.getItem("accessToken"))
  ) {
    const expiry = jwtDecode(localStorage.getItem("accessToken")).exp;
    const now = new Date();
    return now.getTime() > expiry * 1000 ? false : true;
  }
  return false;
};

export default jwtCheck;
