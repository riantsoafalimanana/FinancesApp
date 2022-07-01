import 'react-native-gesture-handler';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import TouchScreen from "./src/screens/TouchScreen";

export default function App() {

    const AppStack = createStackNavigator();
    const {Navigator, Screen} = AppStack;

    return (
        <NavigationContainer>
            <Navigator headerMode='none'>
                <Screen name='Touch' component={TouchScreen} />
            </Navigator>
        </NavigationContainer>
    );
}
