import React from "react";
import { useState } from "react";
import Header from "./Header";
import Title from "./Title";
import Dash from "./Dash";
import Button from "./Button";
import Footer from "./Footer";
import FormInput from "./form-input/Form-input";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const defaultFormFields = {
  email: "",
};

function ResetForm() {
  const auth = getAuth();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendPasswordResetEmail(auth, email);
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="text-gray-900 w-11/12 md:w-8/12 m-auto h-screen flex flex-col justify-center">
      <Header />

      <Title name="Reset your password" />

      <Dash />

      <form className="w-10/12 m-auto" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Button name="RESET MY PASSWORD" />
      </form>

      <Footer title="Don't have an account?" name="Sign Up" to="/signup" />
    </div>
  );
}

export default ResetForm;
