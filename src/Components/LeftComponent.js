
//Import Area
import LanguagesComponent from './LanguagesComponent'
import SkillsComponent from './SkillsComponent'

//Function Defination Area
export default function LeftComponent() {
  return (
        <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
                <img src="../Images/0001.jpg" alt="Avatar" />
                <div class="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Vishwas Kapte</h2>
                </div>
              </div>
              <div class="w3-container">
                <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software Developer</p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i> Pune, India </p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>vishwaskapte@gmail.com</p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+91 9561153397</p>
                <hr />
      
                <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                <SkillsComponent 
                    skill = 'Adobe Photoshop'
                    percent = '90%'
                />
                <SkillsComponent 
                    skill = 'Photography'
                    percent = '80%'
                />
                <SkillsComponent 
                    skill = 'Illustrator'
                    percent = '75%'
                />
                <SkillsComponent 
                    skill = 'Media'
                    percent = '50%'
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
              </div>
            </div><br />
        </div>
  )
}
