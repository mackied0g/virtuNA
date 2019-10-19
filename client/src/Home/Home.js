import React from 'react';


const Home = ({currentUser}) => {
  console.log(currentUser);

  if (!currentUser.username) {
    return "Loading..."
  } else {
    const { group } = currentUser;
    const { meetings } = group;
    return (
      <div>
      <h1>
      {`Welcome, ${currentUser.username}.`}
      </h1>
      <h3>Your group: {group.name}</h3>
      <br/>
      <h3>Your Upcoming Meetings:</h3>
      <ul>
      {meetings.map(meeting => <li>{meeting.dateTime}</li>)}
      </ul>
      </div>
    );
  }
}

export default Home;