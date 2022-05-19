import React from 'react';
import './App.css';
import Home from "./components/Home.js"
import JM from "./image/JM.png"
import NavBar from "./components/Home.js"


function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <header className="App-header">
        {/* Importing Home component */}
      {/* </header> */} 
      <img className="JM-logo" src={JM} alt="JM"></img>
      <Home/>
    </div>
  );
}

export default App;
