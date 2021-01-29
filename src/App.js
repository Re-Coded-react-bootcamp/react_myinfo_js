import React from "react";
import k from "./asset/bat.png";
import MyInfo from "./components/MyInfo";
import "./index.css";

function App() {
  const all = {
    fb: `https://www.facebook.com/koko.like99/`,
    gt: `https://github.com/kodo-yousif`,
    lin: `https://www.linkedin.com/in/kodo-yousif-92b217199/`,
    src: k,
    name: "Kodo Yousif",
    info: [
      "Helo im a software devloper from Kurdistan",
      `i like most
    fields of technology and try to make my way into them as the fields:`,
      `(back end , front end , database , mobile app , AI , desktop app
      ...etc)`,
    ],
    vec: [
      `as every persons you will meet in your life i like vecations ,`,
      `and
    thos are best places for me to rest in my vecations if i could go to
    them:`,
    ],
    placesv: [
      { color: "#34568B", place: "Paris" },
      { color: "#FF6F61", place: "Alaska’s Coast" },
      { color: "#6B5B95", place: "Big Sky, Montana" },
      { color: "#88B04B", place: "Birmingham, Alabama" },
      { color: "#DD4124", place: "The Catskills" },
    ],
  };
  return (
    <div className="container-kk">
      <MyInfo all={all} />
    </div>
  );
}

export default App;
