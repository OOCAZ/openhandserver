import openhandweb from './openhandweb.png'
import './App.css';
import React from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={openhandweb} alt="logo" />
        <h1>
          Enter a number below to Add it!
        </h1>
        <input></input>
        <button>Click me to Add a number</button>
        <h1>
          Enter a number below to Remove it
        </h1>
        <input></input>
        <button>Click me to Remove a number</button>
        <p>
          Numbers Ready:
        </p>
        
      </header>
    </div>
  );
}

export default App;
