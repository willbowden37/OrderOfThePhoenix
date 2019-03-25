import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.press()}>
                <Text>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}