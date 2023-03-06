import React from "react";

function CardForm(props) {
  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }

  return (
    <form className="w-full mb-5">
      <label htmlFor="" className="">
        CARDHOLDER NAME
      </label>

      <input
        type="text"
        name="name"
        required
        autcomplete="off"
        // value={props.name}
        onChange={props.handleChange}
        className="border-2 border-gray-200 focus:border-gray-200 focus:outline-none w-full h-12 rounded-lg pl-3 my-2"
        placeholder="e.g. Jane Appleseed"
      />

      <label htmlFor="" className="">
        CARD NUMBER
      </label>

      <input
        type="text"
        name="number"
        maxLength={19}
        required
        autcomplete="off"
        // value={props.number}
        value={cc_format(props.number)}
        onChange={props.handleChange}
        className="border-2 border-gray-200 focus:border-gray-200 focus:outline-none w-full h-12 rounded-lg pl-3 my-2"
        placeholder="e.g. 1234 5678 9123 0000"
      />

      <div className="flex w-full justify-between">
        <div className="w-full md:w-[50%]">
          <label htmlFor="" className="w-full md:text-base">
            EXP. DATE (MM/YY)
          </label>

          <div className="flex w-11/12 justify-between my-2">
            <input
              type="text"
              name="mm"
              required
              maxLength={2}
              autcomplete="off"
              //   value={props.mm}
              onChange={props.handleChange}
              className="w-[45%] border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-12 rounded-lg pl-3"
              placeholder="MM"
            />

            <input
              type="text"
              name="yy"
              required
              maxLength={2}
              autcomplete="off"
              //   value={props.yy}
              onChange={props.handleChange}
              className="w-[45%] border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-12 rounded-lg pl-3"
              placeholder="YY"
            />
          </div>
        </div>

        <div className="w-2/4 md:w-[45%]">
          <label htmlFor="">CVC</label>
          <input
            type="text"
            name="cvc"
            required
            maxLength={3}
            autcomplete="off"
            // value={props.cvc}
            onChange={props.handleChange}
            className="w-full border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-12 rounded-lg pl-3 my-2"
            placeholder="e.g. 123"
          />
        </div>
      </div>

      <button
        onClick={props.handleClick}
        className="bg-slate-900 w-full rounded-lg h-12 text-white mt-10 shadow-xl"
      >
        Confirm
      </button>
    </form>
  );
}

export default CardForm;
