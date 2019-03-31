import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Button from '../components/Button';
import navigationService from '../services/NavigationService';
import {StackActions} from 'react-navigation';
import style from '../Styles/style';

export default class WinScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: this.props.navigation.getParam('winner'),
            winnerText: ''
        }
        this.state.winnerText = this.getWinText();
    }

    getWinText() {
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
        return winText;
    }

    render() {
        return(
            <View style={[style.container, {backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}]}>
                <Text style={{color: 'blue', fontSize: 45, margin: 10, fontWeight: 'bold'}}>{this.state.winnerText}</Text>
                <Button name="Main Menu" press={() => this.props.navigation.dispatch(StackActions.popToTop())}></Button>
            </View>
        );
    }
}