import React, { Component } from "react";

export default class Coin extends Component {
  render() {
    const j = this.props.j;
    if (this.props.wonBy === "") {
      if (this.props.player === null)
        return (
          <div className="coinContainer">
            <div className="coin" onClick={() => this.props.click(j)} />
          </div>
        );
      else if (this.props.player === 1)
        return (
          <div className="coinContainer">
            <div className="coinOrange" onClick={() => this.props.click(j)} />
          </div>
        );
      else if (this.props.player === 2)
        return (
          <div className="coinContainer">
            <div className="coinBlue" onClick={() => this.props.click(j)} />
          </div>
        );
    } else {
      if (this.props.player === null)
        return (
          <div className="coinContainer">
            <div className="coin" />
          </div>
        );
      else if (this.props.player === 1)
        return (
          <div className="coinContainer">
            <div className="coinOrange" />
          </div>
        );
      else if (this.props.player === 2)
        return (
          <div className="coinContainer">
            <div className="coinBlue" />
          </div>
        );
    }
  }
}
