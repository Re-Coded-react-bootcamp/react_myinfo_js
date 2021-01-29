import React from 'react';
import './App.css';
import Myinfo from './Components/MyInfo/MyInfo';

const name="Name: Faeza Salman";
const description="I graduated from software Engineering, and working as a developer";


function App() {
  return (
    <div>
     <Myinfo name={name} description={description}/>
    </div>
  );
}

export default App;
