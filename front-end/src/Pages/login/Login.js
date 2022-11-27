import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PasswordInput from "../../Components/PasswordInput";
import "./login.css";
import authService from "../../services/authService";
import { useForm, Controller } from "react-hook-form";
import ErrorIcon from "@mui/icons-material/Error";

const Login = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
    },
  });

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
  };

  const [showPassword, setShowPassword] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const navigate = useNavigate();

  const handleClickShowPassword = (e) => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (data) => {
    try {
      const res = await authService.login({
        email: data.email,
        password: data.password,
      });
      onLogin(res);
      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error.response.data.message);
      setServerMessage(error.response.data.message);
    }
  };

  return (
    <Box maxWidth="sm" component="form" className="form-card">
      <h2>Login</h2>
      {serverMessage && (
        <div className="form-warning-container">
          <ErrorIcon />
          <span>{serverMessage}</span>
        </div>
      )}
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
            showPassword={showPassword}
            error={errors.password}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            field={field}
          />
        )}
      />
      <span className="form-align-right">
        <Link to="/forgot-password">Forgot your password?</Link>
      </span>
      <Button
        className="form-button"
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        Log in
      </Button>
      <Button className="form-button" variant="contained">
        Continue with Google
      </Button>
      <p>
        Don't have an account? <Link to="/sign-up">Sign up</Link>{" "}
      </p>
    </Box>
  );
};
export default Login;
