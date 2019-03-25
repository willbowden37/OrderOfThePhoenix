import React, {Component} from 'react';
import {Text} from 'react-native';

export default class GameScreen extends Component {

	constructor() {
		super(props);
		this.state = {
			board: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0]
			],
			playerTurn: -1,
			isGameOver: false
		}
	}

	isValidCoord(x, y) {
		return x >= 0 && x <= 6 && y >= 0 && y <= 5;
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
						// If we go off the board or encounter a point with a different value than the starting point, break.
						if (!isValidCoord(jj, ii) || this.state.board[i][j] != this.state.board[ii][jj]) {
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

    render() {
        return(
            <Text>This is the Game</Text>
        );
    }
}