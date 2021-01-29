import React from 'react'


export default function MyInfo({placesToVisit, name, bio}) {

    const listItems = placesToVisit.map((item) =>
    <li className="nav" key={item}>{item}</li>
    );
    return (
        <div className="card">
            <h1 className="card-header">{name}</h1>
            <p className="bio"> 
            {bio}
            </p>

            <h3 className="p-0">Placeses I would Want to visit:</h3>
            <ul>
              {listItems}
            </ul>
        </div>
    )
}
