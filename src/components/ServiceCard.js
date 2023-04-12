import React from "react";

export default function ServiceCard(props) {
  return (
    <div className={props.className} id={props.id} style={props.style}>
        {/* <img id="image" src="index.jpg" alt="..." /> */}
      <div className="row">
        <div id="image"></div>
      <div>
        <h3></h3>
        <h6></h6>
        <h6></h6>
        <h4></h4>
      </div>
      </div>
    </div>
  );
}
