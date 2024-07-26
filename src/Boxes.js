import React from 'react';

function Boxes({profile}){
  return (
    <div className="profile-box">
      <img src={profile.profilePic} className="profile-pic"  alt="profile"/>
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p className="subtitle">{profile.subtitle}</p>
      </div>
      <p>{profile.description}</p>
      <div className="connections">
        <img src={profile.connectionPic} className="connection-pic"  alt="profile"/>
        <span>{profile.connections} connections</span>
      </div>
      <hr/>
      <button className="connect-button">Connect</button>
    </div>
  );
}
export default Boxes;