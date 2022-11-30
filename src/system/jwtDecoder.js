import jwt from "jwt-decode";

const decodeJWT = (e) => {
  return jwt(e);
};

export default decodeJWT;
