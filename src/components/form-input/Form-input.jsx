import React from "react";
import "./form-input.styles.scss";

function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input
        className="w-full border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-14 pl-5 rounded-lg m-auto shadow-lg"
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
