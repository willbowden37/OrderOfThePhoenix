import React, {Component} from 'react';
import {Text, View} from 'react-native';

import  Button  from '../components/Button';
import navigationService from '../services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TitleScreen extends Component {

    render() {
        return(
            <View>
                <Text>This is the Title</Text>
                <Button
                    name='Instructions'
                    press={() => navigationService.navigate('Inst')}
                />
                 <Button press={() => navigationService.navigate('Win', {playerOneWin: 'true'})}
                        name='Win Screen'
                />
             </View>
        );
    }
}