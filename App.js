import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './vistas/login'
import SignIn from './vistas/signIn'
import Inicio from './vistas/inicio'
import Prueba from "./vistas/prueba"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Prueba">
        <Stack.Screen name="Prueba" component={Prueba} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}
