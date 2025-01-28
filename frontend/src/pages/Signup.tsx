import React from "react";
import SignupForm from "../components/signup-components/SignupForm";
import AuthOptions from "../components/signup-components/AuthOptions";
import style from "../components/signup-components/styles/signup.module.css";

function Signup() {
  return (
    <div className={style["signup-container"]}>
      <AuthOptions />
      <SignupForm />
    </div>
  );
}

export default Signup;
