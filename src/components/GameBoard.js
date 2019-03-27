import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import Button from './Button.js';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Text>
                    {this.createButtonGrid()}
                </Text>
            </TouchableOpacity>
        );
    }

    createButtonGrid() {
        let buttonGrid = []
        for (let j = 0; j < 7; j++) {
            let row = [];
            for (let i = 0; i < 6; i++) {
                let val = j * 6 + i;
                row.push(<Button
                    key={val}
                    style={[{ flex: 1 }]}
                    color='white' />)

            }
            buttonGrid.push(<View key={j}>{row}</View>)
        }

        return (<View>{buttonGrid}</View>);
    }
}