import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FormScreen from '../screens/FormScreen'; // Assuming you have a FormScreen component

const Drawer = createDrawerNavigator();

export default function index() {
  return (
    <NavigationIndependentTree>  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Form" component={FormScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
