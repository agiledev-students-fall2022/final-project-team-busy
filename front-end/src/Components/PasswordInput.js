import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";

const PasswordInput = ({
  inputLabel,
  error,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  field,
}) => {
  return (
    <FormControl fullWidth variant="outlined" {...field}>
      <InputLabel htmlFor="outlined-adornment-password">
        {inputLabel}
      </InputLabel>
      <OutlinedInput
        required={true}
        id="outlined-adornment-password"
        label="Password"
        type={showPassword ? "text" : "password"}
        error={!!error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      {error && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;