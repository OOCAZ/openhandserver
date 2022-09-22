import openhandweb from './openhandweb.png'
import './App.css';
import React from 'react';
import { Button, TextField } from '@mui/material';
import Image from 'mui-image';

function App() {

const [numbers, setNumbers] = React.useState([])
const [currentNumber, setCurrentNumber] = React.useState(String)

const handleChange = (event) => {
    setCurrentNumber(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <Image src={openhandweb} width="30vh"/>
        <h1>
          Welcome to OpenHand!
        </h1>
        <h2>
          Numbers Ready: {numbers}
        </h2>
        <TextField id="outlined-basic" label="Number" variant="outlined" onChange={handleChange} value={currentNumber} />
        <Button variant="contained" sx={{mt: 2}}>Add Number</Button>
        <Button variant="contained" sx={{mt: 2}}>Remove Number</Button>
      </header>
      
    </div>
  );
}

export default App;
