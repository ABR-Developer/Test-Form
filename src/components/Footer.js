import React from "react";

export default function Footer(props) {
  return (
    <div className={props.className} id={props.id} style={props.style}>
      <p id="previous">Previous</p>
      <button id="next"><p id="text">Next</p></button>
    </div>
  );
}
