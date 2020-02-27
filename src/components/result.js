import React, { Component } from "react";

import "../calculator.scss";

export default class Result extends Component {
  render() {
    console.log(this.props.result);
    return <div className="result-wrapper">{this.props.result}</div>;
  }
}
