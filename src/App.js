import React from 'react';
import './App.css';
import MyInfo from './Components/MyInfo.jsx'

function App() {
 const placesToVisit = ["Antalya", "Parague", "Berlin", "goal"]
 const name = "Haval "
const bio = " I am an IT gradute from the American univerisy of Iraq Sulaimani, I have studied several different topics about IT at uni.  One of the most intersting classes was Robotics in whcih we were coding robots and we could see the output of our code phyically running." 

  return (
    <div >
     <MyInfo placesToVisit={placesToVisit} name = {name} bio ={bio} />
    </div>
  );
}

export default App;
