import React from "react";
import { useState, useEffect } from "react";
import SignInForm from "../components/SignInForm";
import Spinner from "../components/Spinner";

function SignIn() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return <div className="">{isLoading ? <Spinner /> : <SignInForm />}</div>;
}

export default SignIn;
