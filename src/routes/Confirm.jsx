import React from "react";
import Completed from "../assets/icon-complete.svg";
import { useNavigate } from "react-router-dom";
import NormalCard from "../components/NormalCard";

function Confirm() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto flex flex-col md:flex-row font-mono justify-between">
      <NormalCard />
      <div className="w-10/12 md:w-2/5 mt-[200px] m-auto flex flex-col justify-center text-center items-center md:mr-[100px] lg:mr-[200px]">
        <img src={Completed} alt="Completed" className="w-[30%]" />
        <h2 className="text-2xl font-bold my-5">THANK YOU!</h2>
        <h3 className="text-slate-400 font-bold">
          We've added your card details
        </h3>
        <button
          className="w-1-/12 bg-slate-900 w-full rounded-lg shadow-xl h-12 text-white my-10"
          onClick={() => {
            navigate("/cardcontainer");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Confirm;
