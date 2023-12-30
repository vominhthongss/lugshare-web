import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";

function CustomTextField({
  label,
  register,
  min,
  isPassword,
  defaultValue,
  fieldName,
  isRequired,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let validationRules = {};
  if (isRequired) {
    validationRules = { required: `${label} is required.` };
  }

  if (min) {
    validationRules.minLength = {
      value: min,
      message: `${label} must be at least ${min} characters.`,
    };
  }

  return (
    <TextField
      sx={{ width: "100%" }}
      defaultValue={defaultValue}
      label={label}
      type={isPassword && !showPassword ? "password" : "text"}
      variant="outlined"
      {...register(fieldName, validationRules)}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <div>show</div> : <div>hide</div>}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
}

export default CustomTextField;
