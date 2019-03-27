import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

export default class Tile extends Component {
	constructor(props) {
		super(props);
	}
    render() {
        return (
			<TouchableOpacity
			onPress={this.props.makeMove(this.props.keyy % 7)}
			style = {{backgroundColor: this.props.color, padding: 10, margins: 10, borderWidth: 5, borderColor: 'black'}}>
            </TouchableOpacity>
        );
    }
}