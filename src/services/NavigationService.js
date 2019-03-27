import React from 'react';

import {
    createAppContainer,
    createStackNavigator,
    NavigationActions
} from 'react-navigation';

import TitleScreen from '../screens/TitleScreen';
import GameScreen from '../screens/GameScreen';
import InstructionsScreen from '../screens/InstructionsScreen';
import WinScreen from '../screens/WinScreen';

let NavigationService = class NavigationService {
    constructor() {
    }

    getTopNavigator() {
        return (
            <TopLevelNavigator
                ref={navigatorRef => {
                    this._navigator = navigatorRef;
                }}
            />
        );
    }

    // Navigate to any screen
    navigate(routeName, params) {
        this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }
}

const navigationService = new NavigationService();
export default navigationService;

const Root = createStackNavigator(
    {
        Title: TitleScreen,
        Inst: InstructionsScreen,
        Game: GameScreen,
        Win: WinScreen,
    },
    {
        initialRouteName: 'Game'
    }
);

const TopLevelNavigator = createAppContainer(Root);