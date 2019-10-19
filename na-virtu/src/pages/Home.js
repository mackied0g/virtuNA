import React from 'react';

const Home = ({currentUser}) => (
  <div>
    Home Page
    <br/>
    {currentUser.username && `Welcome, ${currentUser.username}.`}

    
  </div>
);

export default Home;
