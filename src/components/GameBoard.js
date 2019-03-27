import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Tile from './Tile.js';

export default class GameBoard extends Component {
    render() {
        return (
            <View>
                {this.createButtonGrid()}
            </View>
        );
    }

    createButtonGrid() {
        let buttonGrid = []
        for (let j = 0; j < 7; j++) {
            let row = [];
            for (let i = 0; i < 6; i++) {
                let val = j * 7 + i;
                row.push(<Tile
                    keyy={val}
                    style={[{ flex: 1 }]}
                    color='white' 
					makeMove={this.props.makeMove}/>)
            }
            buttonGrid.push(<View key={j}>{row}</View>)
        }

        return (<View>{buttonGrid}</View>);
    }
}