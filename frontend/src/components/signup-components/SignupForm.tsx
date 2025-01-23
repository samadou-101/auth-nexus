import style from "./styles/signup.module.css";
function SignupForm() {
  return (
    <div className={style["form-cotnainer"]}>
      <h1 className={style["header"]}>Auth Nexus</h1>
      <input id="firstName" type="text" placeholder="First Name" />
      <input id="lastName" type="text" placeholder="Last Name" />
      <input id="email" type="text" placeholder="Email" />

      <input id="password" type="password" placeholder="Password" />
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <button className={style["signup-button"]}>Sign Up</button>
    </div>
  );
}

export default SignupForm;
