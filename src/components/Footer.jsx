import React from "react";
import { FaRocketchat } from "react-icons/fa";

function Footer(props) {
  return (
    <div className="bg-slate-100 w-full rounded-t-lg mt-2 m-auto h-auto pb-20">
      <div className="flex justify-center">
        <h2 className="pr-2">{props.title}</h2>
        <a href={props.to} className="text-[#153fd8]">
          {props.name}
        </a>
      </div>

      <a target="_blank" href="https://wa.me/2348141352896" rel="noreferrer">
        <FaRocketchat className="relative left-[90%] top-[30px]" />
      </a>
    </div>
  );
}

export default Footer;
