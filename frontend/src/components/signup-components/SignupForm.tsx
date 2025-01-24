import style from "./styles/signup.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const inputSchema = object({
    firstName: string().required().min(3).max(25),
    lastName: string().required().min(3).max(25),
    email: string().email().required(),
    password: string().required().min(8).max(30),
    confirmPassword: string().required().min(8).max(30),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(inputSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style["form-cotnainer"]}>
      <h1 className={style["header"]}>Auth Nexus</h1>
      <input
        {...register("firstName", {
          required: true,
          minLength: { value: 2, message: "Min length is 2 characters" },
          maxLength: { value: 25, message: "Max length is 25 characters" },
        })}
        id="firstName"
        type="text"
        placeholder="firstName"
      />
      {errors.firstName && (
        <span
          role="alert"
          style={{
            color: "red",
            opacity: ".8",
            fontWeight: "400",
            fontSize: "14px",
            marginTop: "2px",
          }}
        >
          {errors.firstName.message}
        </span>
      )}
      <input
        {...register("lastName", {
          required: true,
          minLength: { value: 2, message: "Min length is 2 characters" },
          maxLength: { value: 25, message: "Max length is 25 characters" },
        })}
        id="lastName"
        type="text"
        placeholder="Last Name"
      />
      {errors.lastName && (
        <span
          role="alert"
          style={{
            color: "red",
            opacity: ".8",
            fontWeight: "400",
            fontSize: "14px",
            marginTop: "2px",
          }}
        >
          {errors.lastName.message}
        </span>
      )}
      <input
        {...register("email", { required: true })}
        id="email"
        type="text"
        placeholder="Email"
      />

      <input
        {...register("password", { required: true, min: 8, max: 30 })}
        id="password"
        type="password"
        placeholder="Password"
      />
      <input
        {...register("confirmPassword", { required: true, min: 8, max: 30 })}
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <button type="submit" className={style["signup-button"]}>
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
