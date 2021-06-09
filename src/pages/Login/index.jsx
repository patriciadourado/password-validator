import React, {useState} from 'react';
import logo from "../../assets/login.png"
import eye from "../../assets/eye.ico";

import { Button, 
  IconVisibility, 
  Label, 
  LoginBox, 
  Logo, 
  MyInput, 
  Wrapper, 
  WrapperPassword } from './styles';

function Login(){
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessageError, setShowMessageError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function toggleVisibility(){
    setShowPassword(!showPassword);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  function validatePassword(){
    if(password.length < 8){
      setErrorMessage('The password must have at least 8 characters!');
      return false;
    }
    if(password.length > 30){
      setErrorMessage('The password must have maximum of 30 characters!');
      return false;
    }
    if(!password.match(/[a-z]/)){
      setErrorMessage('The password must have at least 1 lowcase character!');
      return false;
    }
    if(!password.match(/[A-Z]/)){
      setErrorMessage('The password must have at least 1 uppercase character!');
      return false;
    }
    if(!password.match(/[0-9]/)){
      setErrorMessage('The password must have at least 1 numberic character!');
      return false;
    }
    if(!password.match(/[!@#$%^&?*]/)){
      setErrorMessage('The password must have at least 1 special character!');
      return false;
    }
    return true;
  }

  const onSubmitClick = (e)=>{
    e.preventDefault();
    if(!validatePassword())
      setShowMessageError(true);
    else
      setShowMessageError(false);
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
          {showMessageError &&
            <Label small>{errorMessage}</Label>
          }
        </WrapperPassword>
        <Button type="submit" onClick={onSubmitClick}>
          Login
        </Button>
      </LoginBox>
    </Wrapper>
  );
}

export default Login;