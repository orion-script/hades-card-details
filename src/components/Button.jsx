import React from "react";

function Button(props) {
  return (
    <button
      type="submit"
      className="bg-[#153fd8] w-full my-2 h-[50px] m-auto shadow-lg rounded-lg text-white"
    >
      {props.name}
    </button>
  );
}

export default Button;
