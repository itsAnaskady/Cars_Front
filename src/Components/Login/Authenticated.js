import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Authenticated = ({ children }) => {
  const history = useHistory();

  // Check for the presence of a valid token in local storage
  useEffect(() => {
    const token = localStorage.getItem("role");
    if (!token) {
      // If the token is not present, redirect the user to the login page
      history.push("/");
    }
  }, [history]);

  return <>{children}</>;
};

export default Authenticated;
