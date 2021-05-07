import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import FormikInit from "./SignUpSchema";
import "../Sign.css";

console.log(this);

const SignUp = () => {
  // eslint-disable-next-line no-unused-vars
  const [errorFromServer, setErrorFromServer] = useState();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    // isSubmitting,
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
      <TextField
        name="passwordConfirmation"
        label="Password Confirmation"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.passwordConfirmation}
        helperText={
          errors.passwordConfirmation &&
          touched.passwordConfirmation &&
          errors.passwordConfirmation
        }
        error={errors.passwordConfirmation && touched.passwordConfirmation}
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

export default SignUp;
