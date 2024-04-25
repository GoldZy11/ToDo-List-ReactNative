import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { Welcome } from '../Views/Welcome';
import { NavigationContainer } from '@react-navigation/native';

export const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="List" component={Welcome} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
