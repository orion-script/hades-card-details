import React from "react";
import Preview from "../components/Preview";
import Load from "../components/Loading";
import { useState, useEffect } from "react";

function Home(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <div className="">{isLoading ? <Load /> : <Preview />}</div>;
}

export default Home;
