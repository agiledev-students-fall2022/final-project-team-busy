import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import "./login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (valueName) => (e) => {
    setValues({ ...values, [valueName]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    alert(`Logging in\nemail:  ${values.email}\npassword:  ${values.password}`);
    setValues({
      email: "",
      password: "",
      showPassword: false,
    });
  };

  return (
    <>
      <Box maxWidth="sm" component="form" className="form-card">
        <h2>Login</h2>
        <TextField
          fullWidth
          required
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          error={true}
          helperText={"Invalid email address"}
        />

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            required={true}
            id="outlined-adornment-password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            error={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error>Invalid password</FormHelperText>
        </FormControl>
        <Link className="form-align-right" to="/forgot-password">
          Forgot your password?
        </Link>

        <Button variant="contained" onClick={handleSubmit}>
          Log in
        </Button>
        <Button variant="contained">Continue with Google</Button>
        <p>
          Don't have an account? <Link to="/sign-up">Sign up</Link>{" "}
        </p>
      </Box>
    </>
  );
};
export default Login;
