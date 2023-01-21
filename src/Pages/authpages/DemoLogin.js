import React, { useState } from "react";
import axios from "axios";
const DemoLogin = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [loginResponse, setLoginResponse] = useState();
  return (
    <>
      {loginResponse}
      <input
        placeholder="email"
        onChange={(e) => {
          setUserEmail(e.target.value);
          console.log(userEmail);
        }}
      />
      <input
        placeholder="Password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button
        onClick={() => {
          axios
            .post(`https://3.14.27.53:3003/users/signin`, {
              email: userEmail,
              password: userPassword,
            })
            .then((response) => {
              console.log(response);
              if (response.data.error == 1) {
                setLoginResponse(response.data.message);
              } else {
                localStorage.setItem("accessToken", response.data.accesstoken);
                setLoginResponse(response.data.message);
              }
            });
        }}
      >
        Login
      </button>
    </>
  );
};
export default DemoLogin;
