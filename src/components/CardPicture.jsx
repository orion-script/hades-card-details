import React from "react";
import CardFront from "../assets/bg-card-front.png";
import CardBack from "../assets/bg-card-back.png";
import CardLogo from "../assets/card-logo.svg";

function CardPicture(props) {
  return (
    <div className="w-full h-full">
      <div className="bg-leftDesktop hidden md:block md:w-[45%] h-screen bg-no-repeat">
        <h2 className="text-white pl-10 font-bold">
          Welcome,
          {props.cardInput.name.substring(0, props.cardInput.name.indexOf(" "))}
        </h2>
        <div className="absolute md:w-[65%] lg:w-[38%] flex flex-col h-[28rem] mt-20 md:ml-[60px] lg:ml-[200px] top-[-20px]">
          <div className="w-full h-full">
            <img
              src={CardFront}
              alt="CardFront"
              className="mb-5 h-[14rem] md:w-[62%] lg:w-[72%]"
            />
            <img
              src={CardLogo}
              alt="CardLogo"
              className="w-[15%] absolute top-5 md:left-3 lg:left-5"
            />
            <h3 className="absolute text-3xl top-[100px] md:px-3 lg:px-7 text-white">
              {props.cardInput.number.length
                ? props.cardInput.number
                : props.defaultCardField.number}
            </h3>

            <div className="absolute w-[65%] flex justify-between top-[180px] md:pl-3 lg:pl-7 text-white">
              <p className="">
                {props.cardInput.name.length
                  ? props.cardInput.name.toLocaleUpperCase()
                  : props.defaultCardField.name}
              </p>
              <p className="md:pr-7">
                {props.cardInput.mm.length
                  ? props.cardInput.mm
                  : props.defaultCardField.mm}
                /
                {props.cardInput.yy.length
                  ? props.cardInput.yy
                  : props.defaultCardField.yy}
              </p>
            </div>
          </div>

          <div className="">
            <img
              src={CardBack}
              alt="CardBack"
              className="h-[14rem] md:w-[62%] lg:w-[72%] md:ml-[80px] lg:ml-[110px]"
            />
            <p className="absolute text-white top-[21.5rem] md:left-[22rem] lg:left-[26rem]">
              {props.cardInput.cvc.length
                ? props.cardInput.cvc
                : props.defaultCardField.cvc}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-leftMobile md:hidden w-full h-[22rem] bg-no-repeat bg-cover pt-20">
        <div className="w-[88%] m-auto py-10 ml-[30px]">
          <img src={CardBack} alt="CardBack" className="w-full h-[12rem]" />
          <p className="absolute text-white top-[12.6rem] left-[16rem]">
            {props.cardInput.cvc.length
              ? props.cardInput.cvc
              : props.defaultCardField.cvc}
          </p>
        </div>

        <div className="w-[88%] m-auto py-10 mr-[30px]">
          <img
            src={CardFront}
            alt="CardFront"
            className="w-full h-[12rem] mt-[-8rem]"
          />
          <img
            src={CardLogo}
            alt="CardLogo"
            className="w-[15%] absolute top-[18rem] left-8"
          />
          <h3 className="absolute text-2xl top-[350px] px-3 text-white">
            {props.cardInput.number.length
              ? props.cardInput.number
              : props.defaultCardField.number}
          </h3>

          <div className="absolute w-[80%] flex justify-between top-[420px] pl-3 text-white">
            <p className="">
              {props.cardInput.name.length
                ? props.cardInput.name.toLocaleUpperCase()
                : props.defaultCardField.name}
            </p>
            <p className="md:pr-7">
              {props.cardInput.mm.length
                ? props.cardInput.mm
                : props.defaultCardField.mm}
              /
              {props.cardInput.yy.length
                ? props.cardInput.yy
                : props.defaultCardField.yy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPicture;
