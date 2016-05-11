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
      type="email"
    /><br />
    <TextField
      hintText="Password"
      errorText="This field is required."
      id="passwordField"
      type="password"
    /><br />
  </div>
);

export default SignupForm;
