import React from "react";
import "./App.css";

import Status from "./Status.js";
import Board from "./Board.js";
import Buttons from "./Buttons.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coinArr: [],
      turn: "p1",
      wonBy: ""
    };
  }

  componentDidMount() {
    this.newGame();
  }

  click = j => {
    const arr = this.state.coinArr.slice(0);
    let i;
    for (let x = arr.length - 1; x >= 0; x--) {
      if (arr[x][j] === "") {
        arr[x][j] = this.state.turn;
        i = x;
        break;
      } else if (x === 0) return;
    }
    this.setState({
      coinArr: arr,
      turn: this.state.turn === "p1" ? "p2" : "p1"
    });

    this.count = 0;
    // Checking Down Direction
    for (let x = 1; x <= 3; x++) {
      if (i + x >= 6) break;
      if (arr[i + x][j] === arr[i][j]) {
        this.count++;
        if (this.count === 3) this.setState({ wonBy: this.state.turn });
      }
    }

    let rightFound = true;
    let leftFound = true;
    this.count = 0;
    for (let y = 1; y <= 3; y++) {
      //Checking Right Direction
      if (rightFound && arr[i][j + y] === arr[i][j] && j + y <= 6) {
        this.count++;
        if (this.count === 3) this.setState({ wonBy: this.state.turn });
      } else rightFound = false;

      //Checking Left Direction
      if (leftFound && arr[i][j - y] === arr[i][j] && j - y >= 0) {
        this.count++;
        if (this.count === 3) this.setState({ wonBy: this.state.turn });
      } else leftFound = false;
    }

    rightFound = true;
    leftFound = true;
    this.count = 0;
    for (let x = 1; x <= 3; x++) {
      //Checking Down-Right Direction
      if (
        rightFound &&
        i + x <= 5 &&
        j + x <= 6 &&
        arr[i + x][j + x] === arr[i][j]
      ) {
        this.count++;
        if (this.count === 3) this.setState({ wonBy: this.state.turn });
      } else rightFound = false;
      //Checking Up-Left Direction
      if (
        leftFound &&
        i - x >= 0 &&
        j - x >= 0 &&
        arr[i - x][j - x] === arr[i][j]
      ) {
        this.count++;
        if (this.count === 3) this.setState({ wonBy: this.state.turn });
      } else leftFound = false;
    }

    rightFound = true;
    leftFound = true;
    this.count = 0;
    for (let x = 1; x <= 3; x++) {
      //Checking Up-Right Direction
      if (
        rightFound &&
        i - x >= 0 &&
        j + x <= 6 &&
        arr[i - x][j + x] === arr[i][j]
      ) {
        this.count++;
        if (this.count === 3) this.setState({ wonBy: this.state.turn });
      } else rightFound = false;
      //Checking Down-Left Direction
      if (
        leftFound &&
        i + x <= 5 &&
        j - x >= 0 &&
        arr[i + x][j - x] === arr[i][j]
      ) {
        this.count++;
        if (this.count === 3) this.setState({ wonBy: this.state.turn });
      } else leftFound = false;
    }
  };

  newGame = () => {
    const newArr = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];
    this.setState({
      coinArr: newArr,
      turn: "p1",
      wonBy: ""
    });
  };

  render() {
    return (
      <div>
        <Status turn={this.state.turn} wonBy={this.state.wonBy} />
        <Board
          coinArr={this.state.coinArr}
          click={this.click}
          wonBy={this.state.wonBy}
        />
        <Buttons onClickResetBtn={this.newGame} />
      </div>
    );
  }
}
