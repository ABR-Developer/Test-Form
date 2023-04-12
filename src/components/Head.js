import React from 'react'

export default function Head(props) {
  return (
    <div className={props.className} id={props.id} style={props.style}>
      <p id="heading">Choose the form of payment</p>
      <span id="vector">&#10799;</span>
      {/* <b id="vector">&#x2715;</b> */}
    </div>
  )
}
