import "./App.css";
import React, { useState } from "react";
function App(){
  let [encendido,setEncendido]=useState(0);
  function on(color){
    setEncendido(color)
  }
  
  return (
    
    <div className="carta">
      {
        encendido === "red"?
          <button className="stop red-light"> stop</button>
          :
          <button onClick={()=>{on("red")}} className="stop"> stop</button>
          
        }
        {
          encendido ==="yellow"?
          <button className="change yellow-light">change</button>
          :
          <button onClick={()=>{on("yellow")}} className="change"> change</button>

        }
        {
          encendido ==="green"?
          <button className="go green-light">go </button>
          :
          <button onClick={()=>{on("green")}} className="go"> go</button>
        }
    </div>
  );
}

export default App;
