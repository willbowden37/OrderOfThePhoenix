import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    basicText: {
        color: 'blue',
        fontSize: 20,
    },
    pageTitle: {
        color: 'blue',
        fontSize: 40,
        padding: 100,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        padding: 15,
        margin: 5,
        backgroundColor: '#58ff15',
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 50,
        textAlign: 'center',
    },
    //todo
    grid: {
        flexDirection: 'column',
        flex: 9,
    },
    //todo
    gridRow: {
        flexDirection: 'row',
        flex: 1,
    },
    tile: {
        padding: 10,
        margin: 1,
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 40,
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