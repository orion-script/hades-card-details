import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/sign-in";
import SignUp from "./routes/sign-up";
import Reset from "./routes/Reset";
import Confirm from "./routes/Confirm";
import CardContainer from "./routes/CardContainer";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardcontainer" element={<CardContainer />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
}

export default App;
