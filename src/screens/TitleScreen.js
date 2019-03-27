import React, {Component} from 'react';
import {Text, View} from 'react-native';

import  Button  from '../components/Button';
import navigationService from '../services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TitleScreen extends Component {

    render() {
        return(
            <View>
                <Text>Connect 4</Text>
                 <Button press={() => navigationService.navigate('Game')}
                        name='Play Game'
                />

                <Button
                    name='Instructions'
                    press={() => navigationService.navigate('Inst')}
                />

             </View>
        );
    }
}