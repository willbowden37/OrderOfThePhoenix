import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Button from './Button.js';

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
                row.push(<Button
                    key={val}
                    style={[{ flex: 1 }]}
<<<<<<< HEAD
                    color='black' />)

=======
                    color='white' 
					makeMove={this.props.makeMove}/>)
>>>>>>> 2f9aa3d30c88251b0042013b7d1822f3b5356737
            }
            buttonGrid.push(<View key={j}>{row}</View>)
        }

        return (<View>{buttonGrid}</View>);
    }
}