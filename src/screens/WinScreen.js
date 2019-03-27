import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Button from '../components/Button';
import navigationService from '../services/NavigationService';
import {StackActions} from 'react-navigation';

export default class WinScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: this.props.navigation.getParam('winner')
        }
    }
    render() {
        let winText;
        if(this.state.winner === -1) {
            winText = 'Player One Wins!';
        }
        else if(this.state.winner === 1) {
            winText = 'Player Two Wins!';
        }
        else {
            winText = 'Draw!';
        }
        return(
            <View>
                <Text>{winText}</Text>
                <Button name="Main Menu" press={() => this.props.navigation.dispatch(StackActions.popToTop())}></Button>
            </View>
        );
    }
}