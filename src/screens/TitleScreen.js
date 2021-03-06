import React, {Component} from 'react';
import {Text, View} from 'react-native';

import  Button  from '../components/Button';
import navigationService from '../services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from '../Styles/style';

export default class TitleScreen extends Component {

    render() {
        return(
            <View style={[style.container, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow'}]}>
                <Text style={[style.pageTitle, {fontSize: 80}]}>Connect 4</Text>
                 <Button press={() => navigationService.navigate('Game')}
                        name='Play Game'
                />

                <Button
                    name='Instructions'
                    press={() => navigationService.navigate('Inst', {winner: -1})}
                />
             </View>
        );
    }
}