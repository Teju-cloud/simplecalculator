import React, { Component } from "react";
import Result from "./components/result";
import Keypad from "./components/keypad";

import "./calculator.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  onClick = operator => {
    console.log(operator);
    if (operator === "clear") {
      this.clear();
    } else if (operator === "=") {
      this.calculate();
    } else {
      this.setState({
        result: this.state.result + operator
      });
    }
  };

  clear = () => {
    this.setState({
      result: ""
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Result result={this.state.result} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}
