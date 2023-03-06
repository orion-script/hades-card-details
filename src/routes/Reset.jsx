import React from "react";
import { useState, useEffect } from "react";
import ResetForm from "../components/ResetForm";
import Spinner from "../components/Spinner";

function Reset() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return <div className="">{isLoading ? <Spinner /> : <ResetForm />}</div>;
}

export default Reset;
