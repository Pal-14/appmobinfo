import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Component/Homepage/HomePage';
import Page1 from './Component/Page1/Page1';
import Page2 from './Component/Page2/Page2'
import PizzaTranslator from './pizzatest';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
       <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Accueil" component={HomePage} />
        <Drawer.Screen name="L'info en continue" component={Page1} />
        <Drawer.Screen name="Connection" component={Page2} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
