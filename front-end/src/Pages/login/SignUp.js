import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PasswordInput from "../../Components/PasswordInput";
import "./login.css";

import authService from "../../services/authService";
import { useForm, Controller } from "react-hook-form";

const SignUp = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
    },
  });

  const watchPassword = watch("password", false);

  const validation = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    passwordConfirm: {
      validate: (value) =>
        value === watchPassword || "The passwords do not match",
    },
  };

  const [showPasswords, setShowPasswords] = useState({
    main: false,
    confirm: false,
  });

  const navigate = useNavigate();

  const handleClickShowPassword = (valueName) => (e) => {
    setShowPasswords({
      ...showPasswords,
      [valueName]: !showPasswords[valueName],
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const onSubmit = (data) => {
    authService.register({
      email: data.email,
      password: data.password,
      confirmPassword: data.passwordConfirm,
    });
    onLogin();
    navigate("/home", { replace: true });
  };

  return (
    <Box maxWidth="sm" component="form" className="form-card">
      <h2>Sign Up</h2>
      <TextField
        fullWidth
        required
        label="Email"
        type="email"
        {...register("email", validation.email)}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Controller
        name="password"
        control={control}
        rules={validation.password}
        render={({ field }) => (
          <PasswordInput
            inputLabel={"Password"}
            showPassword={showPasswords.main}
            error={errors.password}
            handleClickShowPassword={handleClickShowPassword("main")}
            handleMouseDownPassword={handleMouseDownPassword}
            field={field}
          />
        )}
      />
      <Controller
        name="passwordConfirm"
        control={control}
        rules={validation.passwordConfirm}
        render={({ field }) => (
          <PasswordInput
            inputLabel={"Confirm Password"}
            showPassword={showPasswords.confirm}
            error={errors.passwordConfirm}
            handleClickShowPassword={handleClickShowPassword("confirm")}
            handleMouseDownPassword={handleMouseDownPassword}
            field={field}
          />
        )}
      />

      <Button
        className="form-button"
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        Sign Up
      </Button>
      <Button className="form-button" variant="contained">
        Continue with Google
      </Button>
      <p>
        Already have an account? <Link to="/login">Login</Link>{" "}
      </p>
    </Box>
  );
};
export default SignUp;
