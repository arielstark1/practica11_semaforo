import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      fontSize: 30,
      backgroundColor: "yellow",
      fontWeight: "bold",
    };
  }

  cambio() {}

  render() {
    return (
      <div className="carta">
        <button className="stop"> stop</button>
        <button className="change">change </button>
        <button className="go"> go </button>
      </div>
    );
  }
}

export default App;
