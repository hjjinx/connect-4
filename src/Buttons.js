import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttonContainer">
        <button className="resetButton" onClick={this.props.onClickResetBtn}>
          {" "}
          Reset Game
        </button>
      </div>
    );
  }
}
