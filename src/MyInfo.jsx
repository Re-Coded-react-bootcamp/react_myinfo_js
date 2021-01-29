import React from 'react';

const MyInfo = (props) => {
    
    const favoritePlace = props.favoritePlaces.map((place) =>
    <li>{place}</li>
  );
    return (
        <div className="container">
            <h1>{props.myName}</h1>
            <div>{props.description}</div>
            <div>{favoritePlace}</div>
            
        </div>
    );
}

export default MyInfo;
