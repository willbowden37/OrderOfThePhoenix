import React, { Component } from 'react';
import { View } from 'react-native';
import GameBoard from '../components/GameBoard';
import style from '../Styles/style';

import NavigationService from '../services/NavigationService';

export default class GameScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			board: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
			],
			playerTurn: -1
		}
		this.makeMove = this.makeMove.bind(this);
	}

	initBoard() {
		let ret = []
		for (let i = 0; i <= 5; ++i) {
			let row = []
			for (let j = 0; j <= 6; ++j) {
				row.push({ x: j, y: i, value: 0 })
			}
			ret.push(row);
		}
		return ret;
	}

	// Get a completely new copy of an object (not a reference)
	deepCopy(obj) {
		return JSON.parse(JSON.stringify(obj));
	}

	isValidCoord(x, y) {
		return x >= 0 && x <= 6 && y >= 0 && y <= 5;
	}

	isBoardFilled() {
		for (let i = 0; i <= 6; ++i) {
			if (this.state.board[0][i] == 0) {
				return false;
			}
		}
		return true;
	}

	getWinStatus() {
		let directions = [
			[-1, 0],
			[-1, 1],
			[0, 1],
			[1, 1],
			[1, 0],
			[1, -1],
			[0, -1],
			[-1, -1]
		];
		console.log("aaa");
		for (let i = 0; i < 6; ++i) {
			for (let j = 0; j < 7; ++j) {
				for (let h = 0; h < 8; ++h) {
					// Each combination of i, j represents a point on the board
					let ii = i;
					let jj = j;
					for (let k = 0; k < 4; ++k) {
						console.log(i, j, h, k)
						if (i == 5 && j == 0) console.log("ccc", ii, jj, this.isValidCoord(jj, ii) ? this.state.board[ii][jj] : "");
						// If we go off the board or encounter a blank or encounter a point with a different value than the starting point, break.
						console.log(!this.isValidCoord(jj, ii), this.isValidCoord(jj, ii) ? this.state.board[ii][jj] == 0 : "", this.isValidCoord(jj, ii) ? this.state.board[i][j] != this.state.board[ii][jj] : "")
						if (!this.isValidCoord(jj, ii) || this.state.board[ii][jj] == 0 || this.state.board[i][j] != this.state.board[ii][jj]) {
							break;
						}
						ii += directions[h][1];
						jj += directions[h][0];
						// We made it four units, so we have a winner.
						if (k == 3) {
							console.log("bbb");
							return this.state.board[i][j];
						}
					}
				}
			}
		}
		// No winner found
		return 0;
	}

	isGameOver() {
		return this.getWinStatus() != 0 || this.isBoardFilled();
	}

	// We needed to create a callback here because we need state to be updated when we're checking if the
	// game is finished.
	performWinSequence() {
		if (this.isGameOver()) {
			NavigationService.navigate("Win", { winner: this.getWinStatus() });
		}
	}

	makeMove(column) {
		if (this.state.board[0][column] != 0) {
			return;
		}
		let state = this.deepCopy(this.state);
		for (let i = 1; i <= 6; ++i) {
			if (i == 6 || this.state.board[i][column] != 0) {
				state.board[i - 1][column] = state.playerTurn;
				state.playerTurn = -state.playerTurn;
				break;
			}
		}
		this.setState(this.deepCopy(state), this.performWinSequence);
	}

	render() {
		return (
			<View style={style.gameContainer}>
				<GameBoard makeMove={this.makeMove} board={this.state.board}/>
			</View>
		);
	}
}