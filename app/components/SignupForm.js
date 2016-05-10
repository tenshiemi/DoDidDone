import React from 'react';
import TextField from 'material-ui/TextField';

const SignupForm = () => (
  <div>
    <TextField
      hintText="Name"
      id="nameField"
    /><br />
    <TextField
      hintText="Email"
      errorText="This field is required."
      id="emailField"
    /><br />
    <TextField
      hintText="Password"
      errorText="This field is required."
      id="passwordField"
    /><br />
  </div>
);

export default SignupForm;
