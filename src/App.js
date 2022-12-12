//import logo from './logo.svg';
//import './App.css';
//import * as React from 'react';
//import './App.css';
//import Button from '@mui/material/Button';
//import { Button, FormControl, FormControlLabel, FormLabel } from '@mui/material';
//import ButtonGroup from '@mui/material/ButtonGroup';
//import LoginIcon from '@mui/icons-material/Login';
//import LogoutIcon from '@mui/icons-material/Logout';
//import RadioGroup from '@mui/material/RadioGroup';
//import Radio from '@mui/material/Radio';

/*export function App() 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
/*export function App()
{
  return(
    <div className='App'>

      <Button color="primary" variant="contained">
        Button 1 
      </Button>
    </div>
  )
}*/

/*export function App()
{
  return(
    <div className='App'>

      <Button color="primary" size='small'variant="contained">
        Submit
      </Button>
      <br/><br/>
      <Button color="primary" size='medium' variant="contained">
        Cancel
      </Button>
      <br/><br/>
      <Button color="primary"size='large' variant="contained">
        Go Back
      </Button>
    </div>
  )
}*/
/*export function App()
{
  return(
    <div className='App'>
      <Button startIcon={<LoginIcon/>} color="primary" variant="contained">
  Login
</Button>
    </div>
  )
}*/

/*export function App()
{
  return(
    <div className='App'>
      <ButtonGroup variant="contained">
          <Button endIcon={<LoginIcon />} color="primary">
                Login
          </Button>
  <Button startIcon={<LogoutIcon />} color="secondary">
  Logout
  </Button>
</ButtonGroup>
</div>
  )
}*/
//export default App;
/*export function RadioButtonsGroup()
{
  return(
    <div className='App'>
   <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
</div>
  )
}
//export default App;*/

/*import React,{Component} from 'react';
import './App.css'

class Counter extends Component{
  state={
    count:0,
  };
  handleIncrement=()=>{
    this.setState({count:this.state.count + 1})
  };
  handleDecrement=()=>{
    this.setState({count:this.state.count - 1})
  };
  check=()=>{
    if (this.state.count === 3) {

        // Simulate a JS error
        throw new Error('Crashed!!!!');
        }

}
  render(){
    return(
      <div className='App-header'>
          <this.check />
          <button onClick={this.handleIncrement}>Increment</button>
          <span>{this.state.count}</span>
          <button onClick={this.handleDecrement}>Decrement</button>
        
      </div>
    )
  }
};

export default Counter;*/

/*import ErrorBoundary from './ERRORBOUNDARY';
import Counter from './COUNTER';
export function App()
{
      return (
          
          <div style={{ textAlign: "center" }}>
          <ErrorBoundary>
         <Counter />
         
          </ErrorBoundary>
           </div>
      );
      }
 
   
export default App;*/

/*import './App.css';
import axios from "axios";
import React from 'react';

function App() {
  const[data,setData] =  React.useState([]);
  const[location,setLocation] =  React.useState([]);
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=450a9d622a56bff861d328ffbea10a4b';

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
      <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="wrapper">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : ""}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : ""}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like} °F</p> : ""}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : ""}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPN</p> : ""}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/


import './App.css';
import axios from "axios";
import React from 'react';

function App() {
  const[data,setData] =  React.useState([]);
  const[location,setLocation] =  React.useState([]);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=450a9d622a56bff861d328ffbea10a4b`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
      <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="wrapper">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : ""}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : ""}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like} °F</p> : ""}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : ""}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPN</p> : ""}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;