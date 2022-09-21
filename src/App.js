import openhandweb from './openhandweb.png'
import './App.css';
import React from 'react';

function App() {

const [numbers, setNumbers] = React.useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={openhandweb} alt="logo" />
        <h1>
          Welcome to OpenHand!
        </h1>
        <p>
          Numbers Ready: {numbers}
        </p>
        
      </header>
    </div>
  );
}

export default App;
