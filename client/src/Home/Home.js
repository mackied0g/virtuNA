import React from 'react';


const Home = ({currentUser, history}) => {
  console.log(currentUser);

  const clickHandler = (event) => {
    history.push('/chatroom')
  }

  if (!currentUser.username) {
    return "Loading..."
  } else {
    const { group } = currentUser;
    const { meetings } = group;
    return (
      <div style={{textAlign:"center"}}>
      <h1 style={{paddingTop:"40px",height:"100px",backgroundColor:"#025373", color:"white"}}>
      {`Welcome, ${currentUser.username}.`}
      </h1>
      <h3>Your group: {group.name}</h3>
      <br/>
      <h3>Your Upcoming Meetings:</h3>
      <ul>
      {meetings.map(meeting => <li>{meeting.dateTime}</li>)}
      </ul>
      <button onClick={clickHandler}>Enter Chat</button>
      </div>
    );
  }
}

export default Home;
