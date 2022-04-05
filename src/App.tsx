import React from "react";
import "./App.css";
import ButtonAppBar from "./mui/ButtonAppBar";
import DateTimePicker from "./mui/DateTime";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
      </header>
      <DateTimePicker />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
