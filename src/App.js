import React from 'react';
import './App.css';
import Home from "./components/Home.js"
import JM from "./image/JM.png"
import NavBar from "./components/Home.js"
import About from "./components/About.js"
import Skills from "./components/Skills.js"


function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <header className="App-header">
        {/* Importing Home component */}
      {/* </header> */} 
      <img className="JM-logo" src={JM} alt="JM"></img>
      <div>
        <Home/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Skills/>
      </div>
    </div>
    
  );
}

export default App;
