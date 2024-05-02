import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ToDoList } from '../views/ToDoList';
import { DoneList } from '../views/DoneList';

export const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="List" component={ToDoList} />
                <Drawer.Screen name="Done List" component={DoneList} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
