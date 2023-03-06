import React from "react";
import { useState } from "react";
import Header from "./Header";
import Title from "./Title";
import Button from "./Button";
import Footer from "./Footer";
import FormInput from "./form-input/Form-input";
import Dash from "./Dash";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithFacebook = async () => {
    const { owner } = await signInWithFacebookPopup();
    await createUserDocumentFromAuth(owner);
    navigate("/cardcontainer");
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    navigate("/cardcontainer");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/cardcontainer");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for the Email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this Email");
          break;
        default:
          alert(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="text-gray-900 w-11/12 md:w-8/12 m-auto h-auto flex flex-col justify-center">
      <Header />

      <Title name="Log In" />

      <div className="flex justify-between w-10/12 m-auto">
        <button
          onClick={signInWithFacebook}
          className="border-4 w-[49%] md:w-5/12 h-[50px] shadow-xl rounded-lg flex justify-around text-center items-center text-xl md:px-24"
        >
          <FaFacebook />
          Facebook
        </button>

        <button
          onClick={signInWithGoogle}
          className="border-4 w-[49%] md:w-5/12 h-[50px] shadow-xl rounded-lg flex justify-around text-center items-center text-xl md:px-20"
        >
          <FaGoogle />
          GOOGLE
        </button>
      </div>

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

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="w-full text-end">
          <Link to="/reset">Forgot your password?</Link>
        </div>

        <Button name="SIGN IN" />
      </form>

      <Footer title="Don't have an account?" name="Sign Up" to="/signup" />
    </div>
  );
}

export default SignInForm;
