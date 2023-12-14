import React from 'react'

export default function SkillsComponent(props) {
  return (
    <div>
        <p>{props.skill}</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style = {{"width" : props.percent}}>{props.percent}</div>
        </div> 
    </div>          
  )
}
