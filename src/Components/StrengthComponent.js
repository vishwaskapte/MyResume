import React from 'react'

export default function StrengthComponent(props) {
  return (
    <div>
        <p><b>{props.name}</b></p>
        <p>{props.description}</p> 
    </div> 
  )
}
