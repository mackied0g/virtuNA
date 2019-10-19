import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = ({setCurrentUser}) => {

  const responseFacebook = (response) => {
    // console.log(response);
    const fb_id = response.id
    // Send backend fetch to get user
    fetch(`http://localhost:8080/users/${fb_id}`)
    .then(res => res.json())
    .then(user => {
      // if a new user comes, we should have them signup
      setCurrentUser(user)
    })
  }

  const componentClicked = () => {
    console.log("clicked");
  }

  return (
    <FacebookLogin
      appId="2370975983213610"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />
  );

}

export default Login;
