import { TextField } from "@mui/material";
import React from "react";

export const CustomTextField = ({
  value,
  onchange,
  placeholder,
  type,
  autoFocus,
  onFocus,
  error,
  helperText,
  inputProps,
}) => {
  return (
    <div style={{ width: "20vw" }}>
      <TextField
        variant="standard"
        value={value}
        onChange={onchange}
        onFocus={onFocus}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
        error={error}
        helperText={helperText}
        inputProps={inputProps}
      />
    </div>
  );
};
