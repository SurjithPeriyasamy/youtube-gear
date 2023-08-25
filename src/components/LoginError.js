import React from "react";

const LoginError = ({ errorMessage }) => {
  return <div className="text-xs text-red-600">{errorMessage}</div>;
};

export default LoginError;
