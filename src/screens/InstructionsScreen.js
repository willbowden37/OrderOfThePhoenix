import React, {Component} from 'react';
import {Text, View} from 'react-native';
import style from '../Styles/style';

export default class InstructionsScreen extends Component {

    render() {
        return(
        <View style={{backgroundColor: 'yellow', height: 800}}>
            <Text style={style.pageTitle}>Objective</Text>
            <Text style={style.basicText}>To win Connect Four you must be the first player to get four of your colored pieces in a row either horizontally, vertically or diagonally.</Text>
            <Text style={style.pageTitle}>How To Play</Text>
            <Text style={style.basicText}>Player 1 is black and Player 2 is red. To make a move, click any circle in a column. If the column is full, your move will not be made!</Text>
        </View>
        );
    }
}