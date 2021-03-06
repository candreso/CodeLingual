import React from "react";
import { TextField } from "@material-ui/core";
import "./SignUp.css";
const SignUp = () => {
  return (
    <form className="sign-up-wrap">
      <TextField
        id="outlined-helperText"
        label="Email"
        helperText="Some important text"
        variant="outlined"
        fullWidth
      />
    </form>
  );
};

export default SignUp;
