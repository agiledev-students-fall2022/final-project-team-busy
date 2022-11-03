import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PasswordInput from "../../Components/PasswordInput";
import "./login.css";

const SignUp = ({ onLogin }) => {
  const [values, setValues] = useState({
    email: "",
    emailFocused: false,
    validEmail: false,
    password: "",
    passwordFocused: false,
    validPassword: false,
    showPassword: false,
    passwordConfirm: "",
    showPasswordConfirm: false,
    validPasswordConfirm: false,
    passwordConfirmFocused: false,
  });

  const navigate = useNavigate();

  const handleChange = (valueName) => (e) => {
    setValues({ ...values, [valueName]: e.target.value });
    // if (valueName === "password") {
    //   setValues({ ...values, passwordFocused: true });
    // }
    // if (valueName === "email") {
    //   setValues({ ...values, emailFocused: true });
    // }
  };

  const handleClickShowPassword = (valueName) => (e) => {
    setValues({
      ...values,
      [valueName]: !values[valueName],
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    // if (values.password.length === 0 || values.email.length === 0) {
    //   setValues({
    //     ...values,
    //     invalidPassword: values.password.length === 0,
    //     invalidEmail: values.email.length === 0,
    //   });
    //   alert("invalid email or password");
    //   return;
    // }

    setValues({
      ...values,
      email: "",
      password: "",
      showPassword: false,
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
        value={values.email}
        onChange={handleChange("email")}
        // error={values.emailFocused && values.invalidEmail}
        // helperText={"Invalid email address"}
      />
      <PasswordInput
        inputLabel={"Password"}
        showPassword={values.showPassword}
        password={values.password}
        validPassword={values.validPassword}
        passwordFocused={values.passwordFocused}
        onChange={handleChange("password")}
        handleClickShowPassword={handleClickShowPassword("showPassword")}
        handleMouseDownPassword={handleMouseDownPassword}
      />
      <PasswordInput
        inputLabel={"Confirm Password"}
        showPassword={values.showPasswordConfirm}
        password={values.passwordConfirm}
        validPassword={values.validPasswordConfirm}
        passwordFocused={values.passwordConfirmFocused}
        onChange={handleChange("passwordConfirm")}
        handleClickShowPassword={handleClickShowPassword("showPasswordConfirm")}
        handleMouseDownPassword={handleMouseDownPassword}
      />

      <span className="form-align-right">
        <Link to="/forgot-password">Forgot your password?</Link>
      </span>
      <Button
        className="form-button"
        variant="contained"
        onClick={handleSubmit}
      >
        sign Up
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
