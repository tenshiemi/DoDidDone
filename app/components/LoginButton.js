import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12
};

const Login = () => (
  <div>
    <TextField
      hintText="Username"
      aria-label="Username"
    />
     <TextField
      hintText="Password"
      aria-label="Password"
    />
    <RaisedButton label="Login" primary={true} style={style} />
  </div>
);

export default Login;
