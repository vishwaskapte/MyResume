import React from 'react'

export default function EducationComponent(props) {
  return (
        <div class="w3-container">
                <h5 class="w3-opacity"><b>{props.college}</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{props.from} {props.to}</h6>
                <p>{props.degree}</p>
                <hr />
        </div>
  )
}
