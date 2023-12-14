import React from 'react'

export default function WorkExperienceComponent(props) {
  return (
    <div class="w3-container">
          <h5 class="w3-opacity"><b>{ props.name }</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{props.from} <span class="w3-tag w3-teal w3-round">{props.to}</span></h6>
          <p>{props.responsibility}</p>
          <hr />
    </div>
  )
}
