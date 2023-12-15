
//Import Area
import LanguagesComponent from './LanguagesComponent'
import SkillsComponent from './SkillsComponent'
import StrengthComponent from './StrengthComponent'

//Function Defination Area
export default function LeftComponent() {
  return (
    <div class="w3-third">
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
        </div>
        <div class="w3-container">
          <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software Developer</p>
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i> Pune, India </p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>abc@gmail.com</p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+91 985425635256</p>
          <hr />

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <SkillsComponent
            skill='Adobe Photoshop'
            percent='90%'
          />
          <SkillsComponent
            skill='Photography'
            percent='80%'
          />
          <SkillsComponent
            skill='Illustrator'
            percent='75%'
          />
          <SkillsComponent
            skill='Media'
            percent='50%'
          />
          <br />

          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal" ></i>Languages</b></p>
          <LanguagesComponent
            name='English'
          />
          <LanguagesComponent
            name='Spanish'
          />
          <LanguagesComponent
            name='German'
          />
          <br />

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Strengths</b></p>
          <StrengthComponent
            name='Problem Solving'
            description='Developed solutions for complex problems resulting in a 30% increase in efficiency'
          />
          <StrengthComponent
            name='Teamwork'
            description='Collaborated with cross-functional teams resulting in successful project completion within deadline'
          />
          <StrengthComponent
            name='Attention to Detail'
            description='Implemented rigorous testing methodologies resulting in 99% bug-free code'
          />
          <br />
        </div>
      </div><br />
    </div>
  )
}
