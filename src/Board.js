import React, { Component } from "react";
import Coin from "./Coin.js";

export default class Board extends Component {
  render() {
    const coinArr = this.props.coinArr;
    const coinDivArr = [];
    for (let i = 0; i < coinArr.length; i++) {
      coinDivArr.push([]);
      for (let j = 0; j < coinArr[i].length; j++) {
        if (coinArr[i][j] === "")
          coinDivArr[i].push(
            <Coin
              key={i + "_" + j}
              j={j}
              player={null}
              click={this.props.click}
              wonBy={this.props.wonBy}
            >
              {" "}
            </Coin>
          );
        else if (coinArr[i][j] === "p1")
          coinDivArr[i].push(
            <Coin
              key={i + "_" + j}
              j={j}
              player={1}
              click={this.props.click}
              wonBy={this.props.wonBy}
            >
              {" "}
            </Coin>
          );
        else if (coinArr[i][j] === "p2")
          coinDivArr[i].push(
            <Coin
              key={i + "_" + j}
              j={j}
              player={2}
              click={this.props.click}
              wonBy={this.props.wonBy}
            >
              {" "}
            </Coin>
          );
      }
    }
    return <div className="board">{coinDivArr}</div>;
  }
}
