import React, { Component } from "react";
import "./App.css";

export default class Status extends Component {
  render() {
    if (this.props.wonBy === "p1") {
      return (
        <div>
          <center>
            <div className="p1won" />
          </center>
          <div className="status">
            <div className="barp1">
              <p className="para">Player 1 Wins!</p>
            </div>
          </div>
        </div>
      );
    } else if (this.props.wonBy === "p2") {
      return (
        <div>
          <center>
            <div className="p2won" />
          </center>
          <div className="status">
            <div className="barp2">
              <p className="para">Player 2 Wins!</p>
            </div>
          </div>
        </div>
      );
    } else if (this.props.turn === "p1") {
      return (
        <div>
          <div className="status">
            <div className="barp1">
              <p className="para">Player 1, Please select a coin spot.</p>
            </div>
          </div>
        </div>
      );
    } else if (this.props.turn === "p2") {
      return (
        <div>
          <div className="status">
            <div className="barp2">
              <p className="para">Player 2, Please select a coin spot.</p>
            </div>
          </div>
        </div>
      );
    } else return <div />;
  }
}
