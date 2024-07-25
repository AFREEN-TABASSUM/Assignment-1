import React from 'react';
import Boxes from './Boxes';

const profiles=[
  {
    id:1,
    name:'Afreen',
    subtitle:'.2nd',
    description:'This is Afreen.',
    connections:20,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
  {
    id:2,
    name:'Geetha',
    subtitle:'.3rd',
    description:'This is Geetha.',
    connections:15,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
  {
    id: 3,
    name:'Tulasi',
    subtitle:'.3rd',
    description:'This is Tulasi.',
    connections:15,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
  {
    id: 4,
    name:'Divya',
    subtitle:'.3rd',
    description:'This is Divya.',
    connections:15,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
  {
    id:5,
    name:'Divya',
    subtitle:'.3rd',
    description:'This is Divya.',
    connections:15,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
  {
    id:6,
    name:'Tulasi',
    subtitle:'.3rd',
    description:'This is Tulasi.',
    connections:15,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
  {
    id:7,
    name:'Geetha',
    subtitle:'.3rd',
    description:'This is Geetha.',
    connections:15,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
  {
    id:8,
    name:'Afreen',
    subtitle:'.3rd',
    description:'This is Afreen.',
    connections:15,
    profilePic:'/girlPic.avif',
    connectionPic:'/girlPic.avif',
  },
];
function Profile(){
  return (
    <div className="profile-grid">
      {profiles.map(profile=>(<Boxes key={profile.id} profile={profile}/>))}
    </div>
  );
}
export default Profile;