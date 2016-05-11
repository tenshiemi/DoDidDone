import React from 'react';
import TextField from 'material-ui/TextField';

const LoginForm = () => (
  <div>
    <TextField
      hintText="Email"
      id="userEmail"
      type="email"
    />
    <br />
    <TextField
      hintText="Password"
      id="userPassword"
      type="password"
    />
    <br />
  </div>
);


export default LoginForm;
