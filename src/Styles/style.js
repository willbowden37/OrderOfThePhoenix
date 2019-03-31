import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    basicText: {
        color: 'blue',
		fontSize: 20,
		padding: 20
    },
    pageTitle: {
        color: 'blue',
        fontSize: 60,
        padding: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        padding: 30,
        margin: 5,
        backgroundColor: '#48df08',
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 50,
		textAlign: 'center',
		color: 'black'
    },
    grid: {
        flexDirection: 'column',
		flex: 9,
    },
    gridRow: {
        flexDirection: 'row',
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
    },
    tile: {
        padding: 3,
        margin: 1,
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 25,
        width: 50,
        height: 50
    },
    gameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    }
})