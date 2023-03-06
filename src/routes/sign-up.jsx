import React from "react";
import { useState, useEffect } from "react";
import SignUpForm from "../components/SignUpForm";
import Spinner from "../components/Spinner";

function SignUp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return <div className="">{isLoading ? <Spinner /> : <SignUpForm />}</div>;
}

export default SignUp;
