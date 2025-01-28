import style from "./styles/signup.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const inputSchema = z
    .object({
      firstName: z.string().min(3).max(25),
      lastName: z.string().min(3).max(25),
      email: z.string().email(),
      password: z.string().min(8).max(30),
      confirmPassword: z.string().min(8).max(30),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password mismatch",
      path: ["confirmPassword"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(inputSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style["form-cotnainer"]}>
      <h1 className={style["header"]}>Auth Nexus</h1>
      <input
        {...register("firstName")}
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
        {...register("lastName")}
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
        {...register("email")}
        id="email"
        type="text"
        placeholder="Email"
      />
      {errors.email && (
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
          {errors.email.message}
        </span>
      )}
      <input
        {...register("password")}
        id="password"
        type="password"
        placeholder="Password"
      />
      {errors.password && (
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
          {errors.password.message}
        </span>
      )}
      <input
        {...register("confirmPassword")}
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />{" "}
      {errors.confirmPassword && (
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
          {errors.confirmPassword.message}
        </span>
      )}
      <button type="submit" className={style["signup-button"]}>
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
