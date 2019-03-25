import React, {Component} from 'react';
import {Text, View} from 'react-native';

import  Button  from '../components/Button';

export default class TitleScreen extends Component {

    render() {
        return(
            <View>
                <Text>This is the Title</Text>
                <Button
                    name='Instructions' />
             </View>
        );
    }
}