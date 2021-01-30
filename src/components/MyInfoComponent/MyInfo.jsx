import React from 'react';
import './MyInfo.css';

const MyInfo = () => {
  
  const name = 'Mohammed Ali';
  const about =
    'A 20 years old guy from Baghdad who is studying business information technology.spending most of the time in coding, gaming and watching series';
  const places = [
    'bali island',
    'langkawi malaysia',
    'japan',
    'rio de janeiro brazil',
  ];
  return (
    <div>
      <h1>{name}</h1>
      <h2>About Me:</h2>
      <p>
        {about}
      </p>
      <h2>Places i want to vist in a vacation:</h2>
      <ul>
      {places.map((place,i)=>
        <li key={i}>{place}</li>
      )}
      </ul>
    </div>
  );
};

export default MyInfo;
