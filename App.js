import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './vistas/login'
import SignIn from './vistas/signIn'
import Inicio from './vistas/inicio'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component={Inicio}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
