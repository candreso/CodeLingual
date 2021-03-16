import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import FormikInit from "./SignInSchema";
import "../Sign.css";

const SignIn = () => {
  const [errorFromServer, setErrorFromServer] = useState();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = FormikInit(setErrorFromServer);

  return (
    <form className="sign-wrap" onSubmit={handleSubmit}>
      <TextField
        name="email"
        label="E-mail"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        helperText={errors.email && touched.email && errors.email}
        error={errors.email && touched.email}
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        helperText={errors.password && touched.password && errors.password}
        error={errors.password && touched.password}
      />

      <Button
        style={{ fontSize: "1.2rem" }}
        variant="contained"
        color="secondary"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

export default SignIn;
