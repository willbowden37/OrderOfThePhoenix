import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Tile from './Tile.js';
import style from '../Styles/style';

export default class GameBoard extends Component {
	constructor(props) {
		super(props);
	}

    render() {
        return (
            <View>
                {this.createButtonGrid()}
            </View>
        );
	}
	
	intToColor(num) {
		switch (num) {
			case -1:
				return 'black';
			case 0:
				return 'white';
			case 1:
				return 'red';
		}
	}

    createButtonGrid() {
        let buttonGrid = []
        for (let j = 0; j < 7; j++) {
            let row = [];
            for (let i = 0; i < 6; i++) {
                let val = j * 7 + i;
                row.push(<Tile
					key={val}
                    column={val % 7} // cannot use the key instead of this because the key prop can't be read
                    style={[{ flex: 1 }]}
                    color={this.intToColor(this.props.board[i][j])}
					makeMove={this.props.makeMove}/>)
            }
            buttonGrid.push(<View key={j} style={style.gridRow}>{row}</View>)
        }

        return (<View style={style.grid}>{buttonGrid}</View>);
    }
}