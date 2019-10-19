import React from 'react';
import Photo from './achievement.jpg';

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
      {`Welcome, ${currentUser.username}. to Virtu Narcotics Anonymous`}</h1>
      <img src={Photo} style={{width:"100%"}} alt="People climbing a mountain"/>
        <h3>Your group: {group.name}</h3>
        <h3>Your Upcoming Meetings:</h3>
        <ul>
        {meetings.map(meeting => <p>{meeting.dateTime}</p>)}
        </ul>
        <button style={{margin:"20px", fontSize:"16px", color:"black", width:"100%", height:"40px", backgroundColor:"#83A8BF", border:"0"}} onClick={clickHandler}>Enter Chat</button>

      </div>
    );
  }
}

export default Home;
