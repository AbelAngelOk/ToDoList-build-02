import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/homeScreen";
import SettingsScreen from "../screens/settingsScreen";

const Drawer = createDrawerNavigator();

export function MyDrawer () {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
    )
}