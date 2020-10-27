import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    document.onkeydown = (event) => {
      event = event || window.event;

      let right = Number(this.state.ballPosition.left.slice(0, -2)) + 5 + "px";

      if (event.key === "ArrowRight") {
        this.setState({
          ballPosition: { left: right }
        });
      }
    };
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
