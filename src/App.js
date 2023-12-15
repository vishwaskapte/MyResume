
//Import Area
import './App.css';
import LeftComponent from './Components/LeftComponent';
import RightComponent from './Components/RightComponent';
import FooterComponent from './Components/FooterComponent';


//Function Defination Area
function App() {
  return (
    /* Main Container */
    <div className="App">
      <div class="w3-content w3-margin-top">
        <div class="w3-row-padding">
            <h2 class="w3-text-teal">A B C</h2>
            <LeftComponent />
            <RightComponent />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}


//Export Area
export default App;
