import { useState } from 'react'
import './App.css'
import data from './countryData.json';

function App() {
  const [state, setState] = useState([]);

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredData = data.filter(item =>item.name.toLowerCase().includes(inputValue));
    setState(filteredData);
  }

  const handleKey = (event) => {
    if(event.key === "Escape"){
      console.log("Escape")
      setState([])
    }
  }

  return (
    <div>
     <h1>Search</h1>
     <input type="text"  onChange={handleChange} onKeyDown={handleKey} />
     <button>Search</button>
     {state.map((item, index) => (
      <div key={index}>{item.name}</div>
     ))}
    </div>
  );
}

export default App
