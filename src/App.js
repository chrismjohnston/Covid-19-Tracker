import React from "react";
import { 
  MenuItem,
  FormControl,
  Select,
 } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="app-dropdown">
        <Select
          variant="outlined"
          value="abc"
          >
          <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>
      </FormControl>

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
