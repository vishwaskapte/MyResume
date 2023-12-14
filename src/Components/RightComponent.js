//Import Area

import EducationComponent from "./EducationComponent";
import WorkExperienceComponent from "./WorkExperienceComponent";



//Function Defination With Arrow Function
function RightComponent () {
  return (
    <div class="w3-twothird">
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
          <WorkExperienceComponent  
            name = 'Front End Developer / w3schools.com'
            from = 'Jan 2005 - '
            to = 'Current'
            responsibility = 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          />
          <WorkExperienceComponent  
            name = 'Web Developer / something.com'
            from = 'Mar 2012 -'
            to = 'Dec 2014'
            responsibility = 'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          />
          <WorkExperienceComponent  
            name = 'Graphic Designer / designsomething.com'
            from = 'Jun 2010 -'
            to = 'Mar 2012'
            responsibility = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          />
      </div>

      <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
          <EducationComponent 
            college = 'W3Schools.com'
            degree = 'Web Development! All I need to know in one place'
            from = 'Forever'
            to = ''
          />
          <EducationComponent 
            college = 'London Business School'
            degree = 'Master Degree'
            from = '2013 - '
            to = '2015'
          />
          <EducationComponent 
            college = 'School of Coding'
            degree = 'Bachelor Degree'
            from = '2010 - '
            to = '2013'
          />
      </div>


    </div>
  )
}


//Export Area
export default RightComponent;
