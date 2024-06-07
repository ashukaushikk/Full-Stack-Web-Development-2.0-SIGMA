import React from "react";
import Form from "./form";

function Auth() {
  const isSigninPage = window.location.pathname.includes("signin");
  return <Form isSigInPage={isSigninPage} />;
}

export default Auth;
