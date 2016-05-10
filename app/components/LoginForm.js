import React from 'react';
import TextField from 'material-ui/TextField';

const LoginForm = () => (
  <div>
    <TextField
      hintText="Email"
      id="userEmail"
    /><br />
    <TextField
      hintText="Password"
      id="userPassword"
    /><br />
  </div>
);


export default LoginForm;
