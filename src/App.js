import openhandweb from './openhandweb.png'
import './App.css';
import React, {useEffect} from 'react';
import { Button, TextField, ThemeProvider, createTheme, ListItem, List } from '@mui/material';
import Image from 'mui-image';
import axios from 'axios';

function App() {

  const [numbers, setNumbers] = React.useState([])
  const [currentNumber, setCurrentNumber] = React.useState(String)
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  async function fetchData() {
      try{
        console.log(process.env.REACT_APP_URL)
      const res = await axios.get( process.env.REACT_APP_URL + '/app/numbers');
                var temp1 = ""
                Object.entries(res.data).forEach((entry) => {
                  const [key, value] = entry;
                  temp1 = temp1 + " " + value.number.toString()
                });
                setNumbers(temp1);
                console.log(numbers)
            } catch (err) {
                console.log(err);
            }
  }
    useEffect(() => {
        fetchData();
    }, [toggle])

  
  const handleChange = (event) => {
      setCurrentNumber(event.target.value);
      console.log(event.target.value)
    };
  
    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

  function getListNumbers(){
        fetchData();
        console.log(numbers)
  }

  function onAddNumber(){
    const addNumber = {
      number: currentNumber
    }

    axios.post( process.env.REACT_APP_URL + '/app/add', addNumber)
    .then(response => console.log(response.status))
    setCurrentNumber('');
    getListNumbers();
    window.location.reload(false);
    return
  }

  function onRemoveNumber(){
    const removeNumber ={
      number: currentNumber
    }

    axios.post( process.env.REACT_APP_URL + '/app/remove', removeNumber)
    .then(response => console.log(response.status))
    
    setCurrentNumber('');
    getListNumbers();
    window.location.reload(false);
    return
  }

  return (
    <div className="App">
      <header className="App-header">
        <Image src={openhandweb} width="30vh"/>
        <h1>
          Welcome to OpenHand!
        </h1>
        <h2>
          Numbers Ready:
        </h2>
        <h1>
          {numbers}
        </h1>
        <ThemeProvider theme={theme}>
          <TextField id="outlined-basic" label="Number" variant="outlined" onChange={handleChange} value={currentNumber} />
        </ThemeProvider>
        <Button variant="contained" sx={{mt: 2}} onClick={onAddNumber}>Add Number</Button>
        <Button variant="contained" sx={{mt: 2}} onClick={onRemoveNumber}>Remove Number</Button>
      </header>
      
    </div>
  );
}

export default App;
