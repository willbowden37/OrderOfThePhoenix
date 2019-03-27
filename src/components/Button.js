import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import style from '../Styles/style';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={style.button} onPress={() => this.props.press()}>
                <Text style={style.buttonText}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}