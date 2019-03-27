import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class InstructionsScreen extends Component {

    render() {
        return(
        <View>
            <Text>Objective</Text>
            <Text>To win Connect Four you must be the first player to get four of your colored pieces in a row either horizontally, vertically or diagonally.</Text>
            <Text>How To Play</Text>
        </View>
        );
    }
}