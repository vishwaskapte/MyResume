import logo from './logo.svg';
import './App.css';
import LeftComponent from './Components/LeftComponent';
import RightComponent from './Components/RightComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    /* Main Container */
    <div className="App">
      <div class="w3-content w3-margin-top">
        <div class="w3-row-padding">
            <LeftComponent />
            <RightComponent />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
