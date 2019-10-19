import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = () => {

  const clickHandler = () => {
    console.log("Hello!")
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div>
    Hello
    <FacebookLogin
      appId="2370975983213610"
      autoLoad={true}
      fields="name,email,picture"
      onClick={clickHandler}
      callback={responseFacebook} />
    </div>
  );

}

export default Login;
