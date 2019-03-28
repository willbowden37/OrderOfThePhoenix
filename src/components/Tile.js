import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import style from '../Styles/style';

export default class Tile extends Component {
	constructor(props) {
		super(props);
	}
    render() {
        return (
			<TouchableOpacity
			onPress={() => this.props.makeMove(this.props.column)}
			style = {[{backgroundColor: this.props.color}, style.tile]}>
            </TouchableOpacity>
        );
    }
}
