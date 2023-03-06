import React from "react";
import { useState } from "react";
import Form from "../components/CardForm";
import { useNavigate } from "react-router-dom";
import CardPicture from "../components/CardPicture";
import LogOut from "../components/LogOut";

const defaultCardInputs = {
  name: "",
  number: "",
  mm: "",
  yy: "",
  cvc: "",
};

const defaultCardFields = {
  name: "JANE APPLESSED",
  number: "0000 0000 0000 0000",
  mm: "00",
  yy: "00",
  cvc: "000",
};

function CardContainer() {
  const navigate = useNavigate();
  const [cardInputs, setCardInputs] = useState(defaultCardInputs);
  const { name, number, mm, yy, cvc } = cardInputs;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCardInputs({ ...cardInputs, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if ((name, number, mm, yy, cvc)) {
      if (isNaN(mm) || isNaN(yy) || isNaN(cvc)) {
        alert("fill the form appropriately");
      } else {
        navigate("/confirm");
      }
    } else {
      alert("fill the card details correctly");
    }
  };

  return (
    <div className="w-full h-auto flex flex-col md:flex-row font-mono justify-between">
      <CardPicture
        cardInput={cardInputs}
        defaultCardField={defaultCardFields}
      />
      <div className="w-[80%] md:w-[35%] h-[50%] m-auto mt-[200px] md:mt-40 md:mr-[40px] lg:mr-[150px]">
        <Form
          name={name}
          number={number}
          mm={mm}
          yy={yy}
          cvc={cvc}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>

      <LogOut />
    </div>
  );
}

export default CardContainer;
