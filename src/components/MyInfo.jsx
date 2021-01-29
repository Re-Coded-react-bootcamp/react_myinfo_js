import React from "react";

export default function MyInfo(props) {
  var places = props.all.placesv.map((p) => (
    <li style={{ color: p.color }} key={p.place}>
      {p.place}
    </li>
  ));
  var info = props.all.info.map((pa) => (
    <p key={pa}>
      {pa} <br />
    </p>
  ));
  var vec = props.all.vec.map((pa) => (
    <p key={pa}>
      {pa} <br />
    </p>
  ));

  return (
    <center style={{ marginTop: "50px" }}>
      <div className="card ffoonntt">
        <h1 className="shadoww">
          {props.all.name}{" "}
          <span aria-labelledby="Some thing" role="img">
            😃
          </span>
        </h1>
        <img className="rasm" alt="rasm" src={props.all.src}></img>
      </div>

      <div className="card">
        <h2 className="ffoonntt shadoww">Who Am I ?</h2>
        <h4>{info}</h4>
      </div>

      <div className="card">
        <h2 className="ffoonntt shadoww">
          Vacations Times
          <span aria-labelledby="Some thing" role="img">
            😍
          </span>
        </h2>
        <h4>{vec}</h4>
        <h1 className="ffoonntt bshadow">
          <ul>{places}</ul>
        </h1>
      </div>

      <div className="card">
        <h2 className="ffoonntt shadoww">Contact Me!!!</h2>
        <div className="flexxx">
          <a href={props.all.fb} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square fa-4x set"></i>
          </a>
          <a href={props.all.gt} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-4x set"></i>
          </a>
          <a href={props.all.lin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-4x set"></i>
          </a>
        </div>
      </div>
    </center>
  );
}
