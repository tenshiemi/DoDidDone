import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

const Login = () => (
  <div>
    <RaisedButton label="Login" primary={true} style={style}/>
  </div>
);

export default Login;
