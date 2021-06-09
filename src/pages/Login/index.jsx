import React, {useState} from 'react';
import logo from "../../assets/login.png"
import eye from "../../assets/eye.ico";

import { Button, IconVisibility, Label, LoginBox, Logo, MyInput, Wrapper, WrapperPassword } from './styles';

function Login(){
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function toggleVisibility(){
    setShowPassword(!showPassword);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  return(
    <Wrapper>
      <Logo logo={logo} src={logo} alt="Home" title="Home"/>
      <LoginBox>
        <Label>Username</Label>
        <MyInput 
          type="text" 
          placeholder="Username"
          onChange={handleUsernameChange} 
          value={username} 
          required
        />
        <Label>Password</Label>
        <WrapperPassword>
          <MyInput
            type={showPassword ? "text": "password"}
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            required
          >
          </MyInput>
          <IconVisibility onClick={toggleVisibility} eye={eye}></IconVisibility>
        </WrapperPassword>
        <Button type="submit">
          Login
        </Button>
      </LoginBox>
    </Wrapper>
  );
}

export default Login;