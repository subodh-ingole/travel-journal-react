import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./components/Data.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      {
        Data.map(function(item){
          return <Card {...item} />
        })
      }
    </div>
  );
}

export default App;
