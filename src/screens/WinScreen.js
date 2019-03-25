import React, {Component} from 'react';
import {Text} from 'react-native';

export default class WinScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOneWin: this.props.navigation.getParam('playerOneWin')
        }
    }
    render() {
        let winText;
        if(this.state.playerOneWin) {
            winText = 'Player One Wins!';
        }
        else {
            winText = 'Player Two Wins!';
        }
        return(
            <Text>{winText}</Text>
        );
    }
}