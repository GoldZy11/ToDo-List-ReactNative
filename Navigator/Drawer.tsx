import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ToDoList } from '../Views/ToDoList';
import { DeletedList } from '../Views/DeletedList';

export const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="List" component={ToDoList} />
                <Drawer.Screen name="Deleted items" component={DeletedList} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
