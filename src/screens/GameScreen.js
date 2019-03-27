import React, {Component} from 'react';
import {Text} from 'react-native';
import GameBoard from '../components/GameBoard';

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
				row.push({x: j, y: i, value: 0})
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
		]
		for (let i = 0; i < 6; ++i) {
			for (let j = 0; j < 7; ++j) {
				// Each combination of i, j represents a point on the board
				let ii = i;
				let jj = j;
				for (d in directions) {
					for (let k = 0; k < 4; ++k) {
						// For each direction, try going four units in that direction
						ii += d[1];
						jj += d[0];
						// If we go off the board or encounter a blank or encounter a point with a different value than the starting point, break.
						if (!isValidCoord(jj, ii) || this.state.board[ii][jj] == 0 || this.state.board[i][j] != this.state.board[ii][jj]) {
							break;
						}
						// We made it four units, so we have a winner.
						if (k == 3) {
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

	makeMove(column) {
		if (this.state.board[0][column] != 0) {
			return;
		}
		let state = deepCopy(this.state);
		for (let i = 1; i <= 6; ++i) {
			if (i == 6 || this.state.board[i][column] != 0) {
				state.board[i - 1][column] = state.playerTurn;
				state.playerTurn = -state.playerTurn;
				break;
			}
		}
		this.setState(deepCopy(state));
		if (this.isGameOver()) {
			NavigationService.navigate("WinScreen", {winner: this.getWinStatus()});
		}
	}

    render() {
        return(
            <GameBoard makeMove={this.makeMove}/>
        );
    }
}