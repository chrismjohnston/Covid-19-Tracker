import React, { useState } from "react";
import { 
  MenuItem,
  FormControl,
  Select,
 } from '@material-ui/core';
import './App.css';

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "INDIA"]);



  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app-dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 1</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem> */}
          </Select>
        </FormControl>
      </div>

  

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table*/}

      {/* Map */}
    </div>
  );
}

export default App;
